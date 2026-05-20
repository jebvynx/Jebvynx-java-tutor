# Jebvynx Java Tutor — Cloud-Connected LMS Telegram Bot 🤖📚

An interactive, full-stack Telegram learning management system (LMS) designed to streamline curriculum study and exam preparation for computer science students. Built on a modular Node.js engine and connected to a live multi-server cloud database cluster, this bot handles real-time quiz assessment, persistent student progress tracking, and an active community leaderboard.

## 🔗 Live Deployments
* **Telegram Link:** [Jebvynx Java Tutor Bot](https://t.me/jebvynx_java_bot)
* **Production Host Engine:** Live on Render Cloud

---

## 🚀 Key Features

* **Interactive Dashboard Layout:** Access curriculum content, milestone records, and performance tracking directly through native slash commands (`/menu`, `/profile`, `/help`).
* **Automated Progression Gates:** Advanced syllabus sub-topics are programmatically locked (`🔒`) using strict tracking logic. Students must pass the preceding knowledge quiz to auto-unlock subsequent sections.
* **Persistent Student Profiles:** Leverages cloud schemas to log exact point scores, completed module lists, and custom rank tracking metrics based on total academic performance.
* **Live Interactive Leaderboard:** Instantly queries, sorts, and builds a dynamic top-5 student scoreboard layout directly inside the chat interface using aggregated cluster data.

---

## 🛠️ Tech Stack & Architecture

* **Runtime Environment:** `Node.js (v25+)`
* **Application Frameworks:** `Telegraf.js` (Telegram Bot API wrapper), `Express.js` (Web server endpoint routing)
* **Database Cluster:** `MongoDB Atlas Cloud` (Distributed NoSQL infrastructure managed via standard replica sets)
* **Object Data Modeling (ODM):** `Mongoose` (Schema definitions, async data validation, and aggregation filtering)
* **Deployment Infrastructure:** `Render Cloud Platform` (Web service continuous integration pipeline mapped directly to the production branch)

---

## 📂 Project Structure

```text
jebvynx-java-tutor/
├── src/
│   ├── data/
│   │   └── curriculum.js    # Structured Java modules, quiz criteria, and markdown data
│   ├── services/
│   │   └── db.js            # Mongoose schemas, data logic, and leaderboard aggregations
│   └── index.js             # Core server architecture, slash handlers, and keyboard routing
├── .env.example             # Template for required application environment keys
├── .gitignore               # Excludes node_modules and production system credentials
├── package.json             # Manifest file tracking project dependencies and run scripts
└── README.md                # System documentation manual
