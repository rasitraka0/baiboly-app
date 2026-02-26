const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/livres', async (req, res) => {
  try {
    const resultat = await pool.query('SELECT * FROM livres ORDER BY ordre');
    res.json(resultat.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.get('/livres/:livreId/chapitres/:chapitre', async (req, res) => {
  const { livreId, chapitre } = req.params;
  try {
    const resultat = await pool.query(
      'SELECT * FROM versets WHERE livre_id =$1 AND chapitre=$2 ORDER BY verset',
      [livreId, chapitre],
    );
    res.json(resultat.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.get('/recherche', async (req, res) => {
  const motRecherche = req.query.q;
  try {
    const resultat = await pool.query(
      'SELECT * FROM versets WHERE texte ILIKE $1',
      [`%${motRecherche}%`],
    );
    res.json(resultat.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});
router.get('/livres/:livreId/chapitres', async (req, res) => {
  const { livreId } = req.params;
  try {
    const resultat = await pool.query(
      'SELECT DISTINCT chapitre FROM versets WHERE livre_id = $1 ORDER BY chapitre',
      [livreId],
    );
    res.json(resultat.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});
router.get('/livres/:livreId', async (req, res) => {
  const { livreId } = req.params;
  try {
    const resultat = await pool.query('SELECT * FROM livres WHERE id = $1', [
      livreId,
    ]);
    res.json(resultat.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
