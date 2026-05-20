const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  score: { type: Number, default: 0 },
  completedLessons: { type: [String], default: [] }
});

const User = mongoose.model('User', userSchema);

module.exports = {
  connect: async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Successfully connected to MongoDB Atlas Cloud Database!");
    } catch (err) {
      console.error("MongoDB connection error:", err);
    }
  },

  getUser: async (telegramId, firstName) => {
    try {
      let user = await User.findOne({ telegramId: String(telegramId) });
      if (!user) {
        user = new User({
          telegramId: String(telegramId),
          name: firstName,
          score: 0,
          completedLessons: []
        });
        await user.save();
        console.log(`🆕 Created cloud profile for student: ${firstName}`);
      }
      return user;
    } catch (err) {
      console.error("Error fetching user from database:", err);
      return { telegramId, name: firstName, score: 0, completedLessons: [] };
    }
  },

  saveUser: async (telegramId, updatedData) => {
    try {
      await User.findOneAndUpdate({ telegramId: String(telegramId) }, updatedData);
      console.log(`💾 Cloud data updated for Telegram User ID: ${telegramId}`);
    } catch (err) {
      console.error("Error saving user data to cloud:", err);
    }
  },

  getLeaderboard: async () => {
    try {
      return await mongoose.model('User').find({}).sort({ score: -1 }).limit(5);
    } catch (err) {
      console.error("❌ Error fetching leaderboard from cloud:", err);
      return [];
    }
  }
};