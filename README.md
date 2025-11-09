# Fullstack Auth Quiz App (Ready-to-run ZIP)

This archive contains a ready-to-run **local** development setup:
- Backend: Node.js + Express + MongoDB (local)
- Frontend: Static HTML/CSS/JS (your uploaded QUIZ final.html placed at frontend/public/index.html)

## Quick start (Windows CMD)

1. Ensure MongoDB is running locally (default URI: mongodb://localhost:27017/quizapp).
2. Backend:
   ```
   cd backend
   npm install
   # create .env from .env.example and update JWT_SECRET if desired
   npm run dev
   ```
3. Frontend (in another terminal):
   ```
   cd frontend
   npm install
   npm start
   # open http://localhost:3000
   ```

## Notes
- The backend expects a local MongoDB instance. If you prefer Atlas, update backend/.env accordingly.
- The frontend is static and uses fetch/ajax to call backend endpoints if integrated.
- Do not commit .env to version control.

Enjoy! 🎉
