const livreService = require('../services/livreService');

const getAllBooks = async (req, res, next) => {
  try {
    const result = await livreService.getAllBooks();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const getVersesByBookAndChapter = async (req, res, next) => {
  try {
    const { livreId, chapitre } = req.params;
    const result = await livreService.getVersesByBookAndChapter(
      livreId,
      chapitre,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const getChaptersByBook = async (req, res, next) => {
  try {
    const { livreId } = req.params;
    const result = await livreService.getChaptersByBook(livreId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const getBookById = async (req, res, next) => {
  try {
    const { livreId } = req.params;
    const result = await livreService.getBookById(livreId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllBooks,
  getVersesByBookAndChapter,
  getChaptersByBook,
  getBookById,
};
