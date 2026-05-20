require('dotenv').config();
const { Telegraf, Markup } = require('telegraf'); 
const javaCurriculum = require('./data/curriculum');
const db = require('./services/db'); 

// EXPRESS PORT BINDING FOR RENDER
const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
app.get('/', (req, res) => res.send('⚡ Jebvynx Java Tutor engine is active!'));
app.listen(PORT, '0.0.0.0', () => console.log(`📡 Port active on port ${PORT}`));

const token = process.env.BOT_TOKEN;
if (!token) { process.exit(1); }
const bot = new Telegraf(token);

// 1. Dashboard Main Menu
bot.start((ctx) => {
  const userId = ctx.from.id;
  const firstName = ctx.from.first_name || "Developer";
  db.getUser(userId, firstName);

  ctx.reply(
    `🎁 *Welcome to Jebvynx Java Tutor, ${firstName}!*`,
    Markup.inlineKeyboard([
      [Markup.button.callback('📚 Browse Modules', 'menu_browse')],
      [Markup.button.callback('📊 My Progress', 'menu_progress')]
    ])
  );
});

// 2. Main Module Browser
bot.action('menu_browse', (ctx) => {
  const topicButtons = javaCurriculum.map((lesson, index) => {
    return [Markup.button.callback(`🟢 ${lesson.topic}`, `sub_menu_${index}`)];
  });
  topicButtons.push([Markup.button.callback('⬅️ Back to Dashboard', 'go_home')]);

  ctx.editMessageText('📚 *Select a Java topic module:*', {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard(topicButtons)
  });
  ctx.answerCbQuery();
});

// 3. Score & Progress Sheet
bot.action('menu_progress', (ctx) => {
  const userId = ctx.from.id;
  const userProfile = db.getUser(userId, ctx.from.first_name);
  ctx.editMessageText(
    `📊 *Student Progress Sheet*\n\n👤 *Name:* ${userProfile.name}\n🏆 *Total Score:* ${userProfile.score} Point(s)`,
    Markup.inlineKeyboard([Markup.button.callback('⬅️ Back to Dashboard', 'go_home')])
  );
  ctx.answerCbQuery();
});

bot.action('go_home', (ctx) => {
  ctx.editMessageText(`🎁 *Jebvynx Java Tutor Main Menu:*`, Markup.inlineKeyboard([
    [Markup.button.callback('📚 Browse Modules', 'menu_browse')],
    [Markup.button.callback('📊 My Progress', 'menu_progress')]
  ]));
  ctx.answerCbQuery();
});

// 4. Nested Core Execution Engine (Handles Topics -> Subtopics -> Content -> Quizzes)
javaCurriculum.forEach((mainTopic, topicIdx) => {
  
  // Show Subtopics Menu
  bot.action(`sub_menu_${topicIdx}`, (ctx) => {
    const subButtons = mainTopic.subtopics.map((sub, subIdx) => {
      return [Markup.button.callback(`📄 ${sub.title}`, `view_sub_${topicIdx}_${subIdx}`)];
    });
    subButtons.push([Markup.button.callback('⬅️ Back to Modules', 'menu_browse')]);

    ctx.editMessageText(`📂 *${mainTopic.topic}* \nSelect a section to study:`, {
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard(subButtons)
    });
    ctx.answerCbQuery();
  });

  mainTopic.subtopics.forEach((subtopic, subIdx) => {
    
    // View Subtopic Content
    bot.action(`view_sub_${topicIdx}_${subIdx}`, (ctx) => {
      ctx.editMessageText(subtopic.content, {
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard([
          [Markup.button.callback('📝 Take Quiz', `quiz_${topicIdx}_${subIdx}`)],
          [Markup.button.callback('⬅️ Back to Sections', `sub_menu_${topicIdx}`)]
        ])
      });
      ctx.answerCbQuery();
    });

    // Spawn Subtopic Quiz
    bot.action(`quiz_${topicIdx}_${subIdx}`, (ctx) => {
      const optionButtons = subtopic.quiz.options.map(opt => {
        return Markup.button.callback(opt, `ans_${topicIdx}_${subIdx}_${opt.substring(0,1)}`);
      });

      ctx.editMessageText(`❓ *Quiz:* ${subtopic.quiz.question}`, {
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard(optionButtons, { columns: 2 })
      });
      ctx.answerCbQuery();
    });

    // Verify Subtopic Answers
    subtopic.quiz.options.forEach(opt => {
      const shortOpt = opt.substring(0,1); // Grabs 'A', 'B', 'C', etc.
      bot.action(`ans_${topicIdx}_${subIdx}_${shortOpt}`, (ctx) => {
        const userId = ctx.from.id;
        const userProfile = db.getUser(userId, ctx.from.first_name);

        if (opt === subtopic.quiz.correctAnswer) {
          if (!userProfile.completedLessons.includes(subtopic.id)) {
            userProfile.score += 1;
            userProfile.completedLessons.push(subtopic.id);
            db.saveUser(userId, userProfile);
          }

          ctx.editMessageText(`🎉 *Correct Answer!*\n\n${subtopic.quiz.explanation}\n\n🏆 *Your Score:* ${userProfile.score} Point(s)`, {
            parse_mode: 'Markdown',
            ...Markup.inlineKeyboard([[Markup.button.callback('⬅️ Back to Sections', `sub_menu_${topicIdx}`)]])
          });
        } else {
          ctx.editMessageText(`❌ *Incorrect.*\n\nReview the notes and try again!`, Markup.inlineKeyboard([
            [Markup.button.callback('🔄 Retry Quiz', `quiz_${topicIdx}_${subIdx}`)],
            [Markup.button.callback('⬅️ Back to Sections', `sub_menu_${topicIdx}`)]
          ]));
        }
        ctx.answerCbQuery();
      });
    });

  });
});

bot.launch().then(() => console.log("Jebvynx Tutor Engine is live!"));
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));