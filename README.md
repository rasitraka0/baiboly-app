# Baiboly sy Mofon'aina Malagasy

> The Holy Scriptures in the Malagasy language — The Bible and the Mofon'aina in Malagasy.

🌐 https://baiboby-sy-mofonaina.netlify.app

---

## Description

**Baiboly App** is a web application for reading the Bible in Malagasy and consulting the Mofon'aina (daily spiritual reading) for the current month.

### Features

- Full Bible reading in Malagasy (Old and New Testament)
- Search for books by name
- Browse the Mofon'aina by date
- Filter verses by chapter, start and end verse
- Responsive interface (mobile and desktop)

---

## Tech Stack

### Frontend

| Technology        | Usage        |
| ----------------- | ------------ |
| **React**         | UI Framework |
| **Vite**          | Build tool   |
| **Tailwind CSS**  | Styling      |
| **Axios**         | API calls    |
| **React Router**  | Navigation   |
| **Framer Motion** | Animations   |

### Backend

| Technology     | Usage                |
| -------------- | -------------------- |
| **Node.js**    | Runtime              |
| **Express.js** | REST API Framework   |
| **PostgreSQL** | Database             |
| **pg**         | PostgreSQL connector |

### Hosting

| Service       | Usage               |
| ------------- | ------------------- |
| **Netlify**   | Frontend            |
| **Render**    | Backend             |
| **Neon.tech** | PostgreSQL database |

---

## Run the Project Locally

### Prerequisites

- Node.js v18+
- PostgreSQL (or Docker)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rasitraka0/baiboly-app.git
cd baiboly-app
```

### 2. Start the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=3000
DB_HOST=localhost
DB_USER=your_username
DB_PORT=5432
DB_PASSWORD=your_password
DB_NAME=baiboly
```

```bash
npm start
```

### 3. Start the Frontend

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:3000
```

```bash
npm run dev
```

### 4. Open in your browser

```
http://localhost:5173
```

---

## 🚧 Work in Progress

This project is still under active development. New features and improvements are regularly being added.

### Upcoming improvements

- [ ] Multiple Bible languages (English, French, etc.)
- [ ] Dark / Light mode toggle
- [ ] Offline mode (PWA)
- [ ] User bookmarks & favorites

Contributions and suggestions are welcome! Feel free to open an **issue** or submit a **pull request**.

---

## Project Structure

```
baiboly-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   └── services/
│   ├── db.js
│   └── index.js
└── frontend/
    ├── public/
    └── src/
        ├── components/
        ├── pages/
        └── utils/
```
