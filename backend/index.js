require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/bible');
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Serveur tourne dans le port ${PORT}`);
});
