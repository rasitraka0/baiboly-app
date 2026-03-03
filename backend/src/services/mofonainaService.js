const pool = require('../../db');
const getCurrentMonthMofonaina = async () => {
  const result = await pool.query(`
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
      `);
  return result.rows;
};

const getMofonainaByDateActive = async (dateActive) => {
  const result = await pool.query(`SELECT * FROM mofonaina WHERE date = $1`, [
    dateActive,
  ]);
  return result.rows;
};
const getVersesByBookChapterAndRange = async (
  livreId,
  chapitre,
  verset_debut,
  verset_fin,
) => {
  const result = await pool.query(
    'SELECT versets.*, livres.nom AS nom_livre FROM versets JOIN livres ON versets.livre_id = livres.id WHERE versets.livre_id = $1 AND versets.chapitre = $2 AND versets.verset BETWEEN $3 AND $4 ORDER BY versets.verset',
    [livreId, chapitre, verset_debut, verset_fin],
  );
  return result.rows;
};
module.exports = {
  getCurrentMonthMofonaina,
  getMofonainaByDateActive,
  getVersesByBookChapterAndRange,
};
