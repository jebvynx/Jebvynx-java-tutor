# Jebvynx Java Tutor (V1) 🚀

An interactive, server-side Telegram chatbot engineered to help computer science students master core Java programming concepts. This project serves as a dynamic learning companion designed to streamline exam preparation through a self-paced, quiz-locked modular curriculum.

---

## 🛠️ Tech Stack & Architecture

* **Runtime Environment:** Node.js (v25+)
* **Bot Framework:** Telegraf.js (Telegram Bot API wrapper)
* **Data Persistence:** Lightweight local JSON Database Engine (`fs` stream tracking)
* **Configuration:** Dotenv (secure environment variable abstraction)

---

## 🌟 Key Features

* **Persistent Student Profiling:** Automatically captures and logs individual user states (Telegram first name, distinct User ID, scoring tier, and modular index matrix) upon initialization (`/start`).
* **Dynamic Access-Control Gate (Module Locking):** Topics are strictly sequence-locked. Users must correctly answer the current module's multi-choice quiz to increment their structural progression state and unlock subsequent lessons.
* **Decoupled Content Architecture:** The curriculum database matrix (`src/data/curriculum.js`) is fully isolated from the core server orchestration code. New topics, content blocks, or complex quizzes scale automatically at runtime without modification to routing operations.
* **Optimized Inline UI/UX:** Built using asynchronous inline Telegram keyboard markup manipulation (`ctx.editMessageText`). Modifies active screen strings seamlessly on-the-fly to prevent multi-line message flooding and maintain a clean user layout on mobile devices.
* **Automated Academic Ranking:** Evaluates performance thresholds continuously to assign progress ranks (`Beginner Intern 🛠️`, `Java Cadet 🎖️`, `Java Scholar 🎓`) inside the user profile card.

---

## 📂 Project Structure

```text
jebvynx-java-tutor/
├── src/
│   ├── data/
│   │   └── curriculum.js    # Data-driven modular syllabus database
│   ├── services/
│   │   └── db.js            # Persistence layer read/write logic
│   └── index.js             # Core bot gateway initialization & listener loops
├── .env                     # Local environment keys (ignored by git)
├── .gitignore               # Excludes dependencies and local state arrays
├── database.json            # Active structural data document (auto-generated)
├── package.json             # Engine configuration & module manifests
└── README.md                # Technical system documentation