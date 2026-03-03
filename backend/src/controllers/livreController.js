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
    if (result.length === 0) {
      return res.status(404).json({ message: 'Verset non trouvé' });
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const getChaptersByBook = async (req, res, next) => {
  try {
    const { livreId } = req.params;
    const result = await livreService.getChaptersByBook(livreId);
    if (result.length === 0) {
      return res.status(404).json({ message: 'chapitre non trouvé' });
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const getBookById = async (req, res, next) => {
  try {
    const { livreId } = req.params;
    const result = await livreService.getBookById(livreId);

    if (result.length === 0) {
      return res.status(404).json({ message: 'Livre non trouvé' });
    }
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
