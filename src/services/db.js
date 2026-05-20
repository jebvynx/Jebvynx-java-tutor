const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../../database.json');

function readDatabase() {
  try {
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, JSON.stringify({}), 'utf8');
      return {};
    }
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data || '{}');
  } catch (error) {
    console.error("❌ Database Read Error:", error);
    return {};
  }
}

function writeDatabase(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error("❌ Database Write Error:", error);
  }
}

const dbEngine = {
  // 🔽 Added a 'name' argument to catch the Telegram first_name profile parameter
  getUser: (userId, name = "Developer") => {
    const db = readDatabase();
    if (!db[userId]) {
      db[userId] = {
        name: name, // 💾 Saves name permanently to JSON
        score: 0,
        unlockedLessonIndex: 0, 
        completedLessons: []    
      };
      writeDatabase(db);
    } else if (db[userId].name !== name) {
      // If the user changes their name on Telegram, update it in our file too
      db[userId].name = name;
      writeDatabase(db);
    }
    return db[userId];
  },

  saveUser: (userId, updatedState) => {
    const db = readDatabase();
    db[userId] = updatedState;
    writeDatabase(db);
  }
};

module.exports = dbEngine;