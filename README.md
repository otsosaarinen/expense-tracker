## Expense Tracker
Expense tracker is a website for tracking your expenses. It allows you to add income and expense events to your personal account. ``/dashboard`` page isn't finished yet so chart-view of the expenses doesn't work.

## Built using
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

### How to run
1. Install PostgreSQL and create a configuration file ``.env`` inside ``server`` folder. Required variables can be found inside ``.env.example``. Created database should have 2 tables: ``users`` and ``expenses``.
2. Install dependencies for frontend:
  ```bash
  cd frontend
  ```
  ```bash
  npm install
  ```
3. Install dependencies for backend:
  ```bash
  cd backend
  ```
  ```bash
  npm install
  ```

4. Start the backend from the ``server`` folder:
  ```bash
  npx ts-node src/server.ts
  ```
5. Start Vite development server from the ``frontend`` folder:
  ```bash
  npm run dev
  ```
