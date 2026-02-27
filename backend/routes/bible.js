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
router.get('/mofonaina/moisActuel', async (req, res) => {
  try {
    const resultat = await pool.query(
      `
     SELECT
  m.id,
  m.livre_id,
  l.nom AS livre_nom,
  m.chapitre,
  m.verset_debut,
  m.verset_fin,
  to_char(m.date, 'YYYY-MM-DD') AS date,
  m.theme
FROM mofonaina m
JOIN livres l ON l.id = m.livre_id
WHERE m.date >= date_trunc('month', CURRENT_DATE)
  AND m.date <  date_trunc('month', CURRENT_DATE) + INTERVAL '1 month'
ORDER BY m.date;
      `,
    );

    res.json(resultat.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});
router.get('/mofonaina/:dateActif', async (req, res) => {
  const { dateActif } = req.params;
  try {
    const resultat = await pool.query(
      `SELECT * FROM mofonaina WHERE date = $1`,
      [dateActif],
    );
    res.json(resultat.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});
router.get(
  '/mofonaina/:livreId/:chapitre/:verset_debut/:verset_fin',
  async (req, res) => {
    const { livreId, chapitre, verset_debut, verset_fin } = req.params;
    try {
      const resultat = await pool.query(
        'SELECT versets.*, livres.nom AS nom_livre FROM versets JOIN livres ON versets.livre_id = livres.id WHERE versets.livre_id = $1 AND versets.chapitre = $2 AND versets.verset BETWEEN $3 AND $4',
        [livreId, chapitre, verset_debut, verset_fin],
      );
      res.json(resultat.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  },
);

module.exports = router;
