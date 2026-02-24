const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/livres', async (req, res) => {
  try {
    const resultat = await pool.query('SELECT * FROM livres');
    res.json(resultat.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});
module.exports = router;
