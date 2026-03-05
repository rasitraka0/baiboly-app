require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const livreRoutes = require('./src/routes/livreRoutes');
const mofonainaRoutes = require('./src/routes/mofonainaRoutes');
const PORT = process.env.PORT || 3000;
const errorHandler = require('./src/middlewares/errorHandler');
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'API Baiboly fonctionne!' });
});
app.use('/api', livreRoutes);
app.use('/api', mofonainaRoutes);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Serveur tourne dans le port ${PORT}`);
});
