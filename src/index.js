require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
app.get('/', (req, res) => {
  res.send('⚡ Jebvynx Java Tutor engine is active!');
});
app.listen(PORT, '0.0.0.0', () => {
  console.log(`📡 Port validation active on port ${PORT}`);
});
const { Telegraf, Markup } = require('telegraf'); 
const javaCurriculum = require('./data/curriculum');
const db = require('./services/db'); 

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error("❌ Error: BOT_TOKEN is missing!");
  process.exit(1);
}

const bot = new Telegraf(token);

// 1. Dashboard Command
bot.start((ctx) => {
  const userId = ctx.from.id;
  const firstName = ctx.from.first_name || "Developer";
  
  db.getUser(userId, firstName);

  ctx.reply(
    `🎁 *Welcome to Jebvynx Java Tutor, ${firstName}!* \n\nReady to smash your exams next semester? Access your personal study dashboard below:`,
    {
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        [Markup.button.callback('📚 Browse Modules', 'menu_browse')],
        [Markup.button.callback('📊 My Progress', 'menu_progress')]
      ])
    }
  );
});

// 2. Module Browser (Dynamic locking based on progression index)
bot.action('menu_browse', (ctx) => {
  const userId = ctx.from.id;
  const userProfile = db.getUser(userId, ctx.from.first_name);

  const topicButtons = javaCurriculum.map((lesson, index) => {
    const isUnlocked = index <= userProfile.unlockedLessonIndex;
    const statusEmoji = isUnlocked ? "🟢" : "🔒";
    const callbackAction = isUnlocked ? `view_lesson_${index}` : `alert_locked`;
    
    return [Markup.button.callback(`${statusEmoji} ${lesson.topic}`, callbackAction)];
  });

  topicButtons.push([Markup.button.callback('⬅️ Back to Dashboard', 'go_home')]);

  ctx.editMessageText('📚 *Select an unlocked Java topic to study:*', {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard(topicButtons)
  });
  ctx.answerCbQuery();
});

// 3. Score & Progress Sheet
bot.action('menu_progress', (ctx) => {
  const userId = ctx.from.id;
  const userProfile = db.getUser(userId, ctx.from.first_name);
  
  const rank = userProfile.score >= 5 ? "Java Scholar 🎓" : userProfile.score >= 3 ? "Java Cadet 🎖️" : "Beginner Intern 🛠️";

  ctx.editMessageText(
    `📊 *Student Progress Sheet*\n\n` +
    `👤 *Name:* ${userProfile.name}\n` +
    `🏆 *Total Score:* ${userProfile.score} Point(s)\n` +
    `🔑 *Unlocked:* ${userProfile.unlockedLessonIndex + 1} / ${javaCurriculum.length} Modules\n` +
    `🎖️ *Rank:* ${rank}`,
    {
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([Markup.button.callback('⬅️ Back to Dashboard', 'go_home')])
    }
  );
  ctx.answerCbQuery();
});

// Locked topic safety trigger
bot.action('alert_locked', (ctx) => {
  ctx.answerCbQuery("🔒 This module is locked! Pass the previous quizzes to unlock it.", { show_alert: true });
});

// Dashboard Menu Router
bot.action('go_home', (ctx) => {
  ctx.editMessageText(`🎁 *Jebvynx Java Tutor Main Menu:*`, {
    ...Markup.inlineKeyboard([
      [Markup.button.callback('📚 Browse Modules', 'menu_browse')],
      [Markup.button.callback('📊 My Progress', 'menu_progress')]
    ])
  });
  ctx.answerCbQuery();
});

// 4. Curriculum Core Execution Engine
javaCurriculum.forEach((lesson, index) => {
  
  // View Lesson
  bot.action(`view_lesson_${index}`, (ctx) => {
    ctx.reply(lesson.content, {
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        Markup.button.callback('📝 Take Topic Quiz', `take_quiz_${index}`),
        Markup.button.callback('⬅️ Back to Topics', 'menu_browse')
      ])
    });
    ctx.answerCbQuery();
  });

  // Spawn Quiz Options (Edits inline instead of printing fresh text lines)
  bot.action(`take_quiz_${index}`, (ctx) => {
    const quiz = lesson.quiz;
    const optionButtons = quiz.options.map(option => {
      return Markup.button.callback(option, `verify_ans_${index}_${option}`);
    });

    ctx.editMessageText(`❓ *Quiz:* ${quiz.question}`, {
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard(optionButtons, { columns: 2 })
    });
    ctx.answerCbQuery();
  });

  // Check Quiz Answer and Update database.json inline
  lesson.quiz.options.forEach(option => {
    bot.action(`verify_ans_${index}_${option}`, (ctx) => {
      const userId = ctx.from.id;
      const userProfile = db.getUser(userId, ctx.from.first_name);

      if (option === lesson.quiz.correctAnswer) {
        if (!userProfile.completedLessons.includes(lesson.id)) {
          userProfile.score += 1;
          userProfile.completedLessons.push(lesson.id);
        }

        const nextIndex = index + 1;
        const hasNextLesson = nextIndex < javaCurriculum.length;

        if (hasNextLesson && index === userProfile.unlockedLessonIndex) {
          userProfile.unlockedLessonIndex = nextIndex;
        }

        db.saveUser(userId, userProfile);

        let successMsg = `🎉 *Correct Answer!*\n\n${lesson.quiz.explanation}\n\n🏆 *Your Score:* ${userProfile.score} Point(s)`;
        let navButtons = [];

        if (hasNextLesson) {
          navButtons.push([Markup.button.callback('➡️ Advance to Next Lesson', `view_lesson_${nextIndex}`)]);
        } else {
          successMsg += `\n\n🎓 *Congratulations, ${userProfile.name}!* You have completely mastered all beginner level lessons!`;
        }
        navButtons.push([Markup.button.callback('⬅️ Back to Topics', 'menu_browse')]);

        ctx.editMessageText(successMsg, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(navButtons) });

      } else {
        ctx.editMessageText(
          `❌ *"${option}" is incorrect.*\n\nReview the lesson notes above and try again!\n\n📊 Current Score remains: ${userProfile.score} points.`,
          {
            parse_mode: 'Markdown',
            ...Markup.inlineKeyboard([
              [Markup.button.callback('🔄 Retry Quiz', `take_quiz_${index}`)],
              [Markup.button.callback('⬅️ Back to Topics', 'menu_browse')]
            ])
          }
        );
      }
      ctx.answerCbQuery();
    });
  });
});

bot.launch().then(() => console.log("🚀 Jebvynx Java Tutor V1 is online with persistent name tracking!"));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));