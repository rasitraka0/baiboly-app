require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const livreRoutes = require('./src/routes/livreRoutes');
const mofonainaRoutes = require('./src/routes/mofonainaRoutes');
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api', livreRoutes);
app.use('/api', mofonainaRoutes);

app.listen(PORT, () => {
  console.log(`Serveur tourne dans le port ${PORT}`);
});
