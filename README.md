# Baiboly sy Mofon'aina Malagasy

> Ny Soratra Masina amin'ny teny Malagasy — La Bible et le Mofon'aina en langue malgache.

🌐 https://baiboby-sy-mofonaina.netlify.app

---

## Description

**Baiboly App** est une application web permettant de lire la Bible en malgache et de consulter le Mofon'aina (lecture spirituelle quotidienne) du mois en cours.

### Fonctionnalités

- Lecture de la Bible complète en malgache (Ancien et Nouveau Testament)
- Recherche de livres par nom
- Consultation du Mofon'aina par date
- Filtrage des versets par chapitre, verset de début et de fin
- Interface responsive (mobile et desktop)

---

## Stack technique

### Frontend

| Technologie       | Utilisation  |
| ----------------- | ------------ |
| **React**         | Framework UI |
| **Vite**          | Build tool   |
| **Tailwind CSS**  | Styles       |
| **Axios**         | Appels API   |
| **React Router**  | Navigation   |
| **Framer Motion** | Animations   |

### Backend

| Technologie    | Utilisation          |
| -------------- | -------------------- |
| **Node.js**    | Runtime              |
| **Express.js** | Framework API REST   |
| **PostgreSQL** | Base de données      |
| **pg**         | Connexion PostgreSQL |

### Hébergement

| Service       | Utilisation                |
| ------------- | -------------------------- |
| **Netlify**   | Frontend                   |
| **Render**    | Backend                    |
| **Neon.tech** | Base de données PostgreSQL |

---

## Lancer le projet en local

### Prérequis

- Node.js v18+
- PostgreSQL (ou Docker)
- Git

### 1 Cloner le projet

```bash
git clone https://github.com/rasitraka0/baiboly-app.git
cd baiboly-app
```

### 2 Lancer le Backend

```bash
cd backend
npm install
```

Créez un fichier `.env` dans le dossier `backend` :

```env
PORT=3000
DB_HOST=localhost
DB_USER=votre_utilisateur
DB_PORT=5432
DB_PASSWORD=votre_mot_de_passe
DB_NAME=baiboly
```

```bash
npm start
```

### 3 Lancer le Frontend

```bash
cd frontend
npm install
```

Créez un fichier `.env` dans le dossier `frontend` :

```env
VITE_API_URL=http://localhost:3000
```

```bash
npm run dev
```

### 4 Ouvrir dans le navigateur

```
http://localhost:5173
```

---

## Structure du projet

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

---
