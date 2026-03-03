const livreService = require('../services/livreService');

const getAllBooks = async (req, res) => {
  const livres = await livreService.getAllBooks();
  res.json(livres);
};
const getVersesByBookAndChapter = async (req, res) => {
  const { livreId, chapitre } = req.params;
  const result = await livreService.getVersesByBookAndChapter(
    livreId,
    chapitre,
  );
  res.json(result);
};
const getChaptersByBook = async (req, res) => {
  const { livreId } = req.params;
  const result = await livreService.getChaptersByBook(livreId);
  res.json(result);
};
const getBookById = async (req, res) => {
  const { livreId } = req.params;
  const result = await livreService.getBookById(livreId);
  res.json(result);
};
module.exports = {
  getAllBooks,
  getVersesByBookAndChapter,
  getChaptersByBook,
  getBookById,
};
