const express = require('express');
const router = express.Router();
const mofonainaController = require('../controllers/mofonainaController');

router.get(
  '/mofonaina/moisActuel',
  mofonainaController.getCurrentMonthMofonaina,
);
router.get(
  '/mofonaina/:dateActive',
  mofonainaController.getMofonainaByDateActive,
);
router.get(
  '/mofonaina/:livreId/:chapitre/:verset_debut/:verset_fin',
  mofonainaController.getVersesByBookChapterAndRange,
);
module.exports = router;
