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

// Connect to MongoDB Atlas Cloud
db.connect();

// Helper function to calculate total subtopics
const getTotalSubtopicsCount = () => {
  return javaCurriculum.reduce((acc, topic) => acc + topic.subtopics.length, 0);
};

// 1. Dashboard Main Menu
bot.start(async (ctx) => {
  const userId = ctx.from.id;
  const firstName = ctx.from.first_name || "Developer";
  await db.getUser(userId, firstName);

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

// 3. Upgraded Score & Progress Sheet
bot.action('menu_progress', async (ctx) => {
  const userId = ctx.from.id;
  const userProfile = await db.getUser(userId, ctx.from.first_name);
  
  const totalSubtopics = getTotalSubtopicsCount();
  const completedCount = userProfile.completedLessons.length;
  const progressPercent = totalSubtopics > 0 ? Math.round((completedCount / totalSubtopics) * 100) : 0;
  
  const rank = userProfile.score >= 10 ? "Java Mastermind 🚀" : userProfile.score >= 5 ? "Java Scholar 🎓" : userProfile.score >= 2 ? "Java Cadet 🎖️" : "Beginner Intern 🛠️";

  ctx.editMessageText(
    `📊 *Student Progress Sheet*\n\n` +
    `👤 *Name:* ${userProfile.name}\n` +
    `🏆 *Total Score:* ${userProfile.score} Point(s)\n` +
    `✅ *Completed Sections:* ${completedCount} / ${totalSubtopics}\n` +
    `📈 *Syllabus Progress:* ${progressPercent}%\n` +
    `🎖️ *Rank:* ${rank}`,
    {
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([Markup.button.callback('⬅️ Back to Dashboard', 'go_home')])
    }
  );
  ctx.answerCbQuery();
});

bot.action('go_home', (ctx) => {
  ctx.editMessageText(`🎁 *Jebvynx Java Tutor Main Menu:*`, {
    ...Markup.inlineKeyboard([
      [Markup.button.callback('📚 Browse Modules', 'menu_browse')],
      [Markup.button.callback('📊 My Progress', 'menu_progress')]
    ])
  });
  ctx.answerCbQuery();
});

bot.action('alert_locked', (ctx) => {
  ctx.answerCbQuery("🔒 This section is locked! You must complete the previous section's quiz first.", { show_alert: true });
});

// 4. Nested Core Execution Engine
javaCurriculum.forEach((mainTopic, topicIdx) => {
  
  bot.action(`sub_menu_${topicIdx}`, async (ctx) => {
    const userId = ctx.from.id;
    const userProfile = await db.getUser(userId, ctx.from.first_name);

    const subButtons = mainTopic.subtopics.map((sub, subIdx) => {
      let isUnlocked = false;
      if (topicIdx === 0 && subIdx === 0) {
        isUnlocked = true;
      } else {
        let prevSubtopicId = null;
        if (subIdx > 0) {
          prevSubtopicId = mainTopic.subtopics[subIdx - 1].id;
        } else if (topicIdx > 0) {
          const prevMainTopic = javaCurriculum[topicIdx - 1];
          prevSubtopicId = prevMainTopic.subtopics[prevMainTopic.subtopics.length - 1].id;
        }
        
        if (prevSubtopicId && userProfile.completedLessons.includes(prevSubtopicId)) {
          isUnlocked = true;
        }
      }

      const statusEmoji = isUnlocked ? "📄" : "🔒";
      const actionTarget = isUnlocked ? `view_sub_${topicIdx}_${subIdx}` : `alert_locked`;

      return [Markup.button.callback(`${statusEmoji} ${sub.title}`, actionTarget)];
    });
    
    subButtons.push([Markup.button.callback('⬅️ Back to Modules', 'menu_browse')]);

    ctx.editMessageText(`📂 *${mainTopic.topic}*\nSelect a section to study:`, {
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard(subButtons)
    });
    ctx.answerCbQuery();
  });

  mainTopic.subtopics.forEach((subtopic, subIdx) => {
    
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

    subtopic.quiz.options.forEach(opt => {
      const shortOpt = opt.substring(0,1);
      bot.action(`ans_${topicIdx}_${subIdx}_${shortOpt}`, async (ctx) => {
        const userId = ctx.from.id;
        const userProfile = await db.getUser(userId, ctx.from.first_name);

        if (opt === subtopic.quiz.correctAnswer) {
          if (!userProfile.completedLessons.includes(subtopic.id)) {
            userProfile.completedLessons.push(subtopic.id);
            userProfile.score += 1;
            await db.saveUser(userId, userProfile);
          }

          let successMsg = `🎉 *Correct Answer!*\n\n${subtopic.quiz.explanation}\n\n🏆 *Your Score:* ${userProfile.score} Point(s)`;
          
          const hasNextInCurrent = subIdx + 1 < mainTopic.subtopics.length;
          const hasNextModule = topicIdx + 1 < javaCurriculum.length;
          
          let navButtons = [];
          if (hasNextInCurrent) {
            navButtons.push([Markup.button.callback('➡️ Advance to Next Section', `view_sub_${topicIdx}_${subIdx + 1}`)]);
          } else if (hasNextModule) {
            navButtons.push([Markup.button.callback('📂 Advance to Next Module', `sub_menu_${topicIdx + 1}`)]);
          } else {
            successMsg += `\n\n🎓 *Incredible Job, ${userProfile.name}!* You have conquered every single sub-topic module!`;
          }
          
          navButtons.push([Markup.button.callback('⬅️ Back to Sections', `sub_menu_${topicIdx}`)]);

          ctx.editMessageText(successMsg, {
            parse_mode: 'Markdown',
            ...Markup.inlineKeyboard(navButtons)
          });
        } else {
          ctx.editMessageText(`❌ *"${opt}" is incorrect.*\n\nReview the notes and try again!\n\n📊 Current Score: ${userProfile.score} points.`, {
            parse_mode: 'Markdown',
            ...Markup.inlineKeyboard([
              [Markup.button.callback('🔄 Retry Quiz', `quiz_${topicIdx}_${subIdx}`)],
              [Markup.button.callback('⬅️ Back to Sections', `sub_menu_${topicIdx}`)]
            ])
          });
        }
        ctx.answerCbQuery();
      });
    });

  });
});

bot.launch().then(() => console.log("🚀 Jebvynx Cloud Engine via MongoDB Atlas is live!"));
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));