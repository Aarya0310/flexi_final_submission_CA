
# 🧠 Technical Quiz App

A **full-stack web application** that allows users to take a technical quiz on **HTML, CSS, and JavaScript**, view their results, and store scores securely in a **MongoDB database**.
It features a smooth UI, dark mode 🌙, question review section, and record tracking.

---

## ✨ Features

✅ **Interactive Quiz Interface** – Modern and responsive design built with HTML, CSS, and JavaScript.  

✅ **Dark/Light Mode** toggle 🌗 for better user experience.  

✅ **Automatic Result Saving** – Stores user name, PRN, and score in MongoDB.  

✅ **Past Records Section** – Fetches and displays previous quiz attempts.  

✅ **Question Review** – See your correct and incorrect answers after completion.  

✅ **Smooth Animations** and intuitive UX.

---

## 🧩 Tech Stack

**Frontend:**

* HTML5, CSS3, JavaScript (Vanilla JS)
* LocalStorage (fallback if backend is off)

**Backend:**

* Node.js, Express.js
* MongoDB (via Mongoose)
* CORS, dotenv, nodemon

---

## ⚙️ Installation & Setup (Local)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/technical-quiz-app.git
cd technical-quiz-app
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder and add:

```env
MONGO_URI=mongodb://127.0.0.1:27017/quizDB
PORT=5001
```

Run backend server:

```bash
npm run dev
```

If successful, you’ll see:

```
✅ Server running on port 5001
✅ MongoDB connected successfully
```

### 3️⃣ Run Frontend

Simply open `frontend/index.html` (or your quiz HTML file) in your browser.
It will automatically connect to your backend API at:

```
http://localhost:5001/api/records
```

---

## 🧠 Quiz Flow

1. Enter your **Name** and **PRN**.
2. Click **Start Quiz** 🏁.
3. Answer all questions — each next button unlocks after 3 seconds ⏳.
4. At the end, view your **score** and detailed **review**.
5. Your record is saved in MongoDB automatically.
6. You can view past attempts under **View Records** 📜.

---

## 📁 Folder Structure

```
technical-quiz-app/
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   └── Record.js
│   ├── routes/
│   │   └── recordRoutes.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   └── index.html  (or quizfinal.html)
│
└── README.md
```

---

## 🧰 Useful Commands

| Command       | Description                     |                                 |
| ------------- | ------------------------------- | ------------------------------- |
| `npm install` | Install backend dependencies    |                                 |
| `npm run dev` | Run backend in development mode |                                 |
| `npm start`   | Run backend in production       |                                 |
| `netstat -ano | find "5001"`                    | Check if backend port is in use |
| `mongosh`     | Start MongoDB shell             |                                 |

---

## 🎨 Screenshots

| Light Mode | Dark Mode |
| ---------- | --------- |
| 🌞 <img width="1908" height="919" alt="Screenshot 2025-11-09 221942" src="https://github.com/user-attachments/assets/b7acaca5-60b3-4de1-b3da-2fa630032fbf" width = 500 />
    | 🌙<img src="https://github.com/user-attachments/assets/23c0bab9-c9b9-45c7-b99c-74a67f007e4a" alt="Dark Mode Screenshot" width="800" />


       |

---

## 🤝 Contributing

Pull requests are welcome!
If you'd like to improve or add features, please fork this repo and create a PR.
