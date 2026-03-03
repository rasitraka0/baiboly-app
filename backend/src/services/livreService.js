const pool = require('../../db');

const getAllBooks = async () => {
  const result = await pool.query('SELECT * FROM livres ORDER BY ordre');
  return result.rows;
};

const getVersesByBookAndChapter = async (livreId, chapitre) => {
  const result = await pool.query(
    'SELECT * FROM versets WHERE livre_id =$1 AND chapitre=$2 ORDER BY verset',
    [livreId, chapitre],
  );
  return result.rows;
};

const getChaptersByBook = async (livreId) => {
  const result = await pool.query(
    'SELECT DISTINCT chapitre FROM versets WHERE livre_id = $1 ORDER BY chapitre',
    [livreId],
  );
  return result.rows;
};

const getBookById = async (livreId) => {
  const result = await pool.query('SELECT * FROM livres WHERE id = $1', [
    livreId,
  ]);
  return result.rows;
};
module.exports = {
  getAllBooks,
  getVersesByBookAndChapter,
  getChaptersByBook,
  getBookById,
};
