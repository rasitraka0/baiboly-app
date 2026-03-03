const express = require('express');
const router = express.Router();
const livreController = require('../controllers/livreController');

router.get('/livres', livreController.getAllBooks);
router.get(
  '/livres/:livreId/chapitres/:chapitre',
  livreController.getVersesByBookAndChapter,
);
router.get('/livres/:livreId/chapitres', livreController.getChaptersByBook);
router.get('/livres/:livreId', livreController.getBookById);
module.exports = router;
