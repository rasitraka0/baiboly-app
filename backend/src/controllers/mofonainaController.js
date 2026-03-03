const mofonainaServices = require('../services/mofonainaService');

const getCurrentMonthMofonaina = async (req, res, next) => {
  try {
    const result = await mofonainaServices.getCurrentMonthMofonaina();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const getMofonainaByDateActive = async (req, res, next) => {
  try {
    const { dateActive } = req.params;
    const result = await mofonainaServices.getMofonainaByDateActive(dateActive);
    if (result.length === 0) {
      return res.status(404).json({ message: 'mofonaina non trouvé' });
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const getVersesByBookChapterAndRange = async (req, res, next) => {
  try {
    const { livreId, chapitre, verset_debut, verset_fin } = req.params;
    const result = await mofonainaServices.getVersesByBookChapterAndRange(
      livreId,
      chapitre,
      verset_debut,
      verset_fin,
    );
    if (result.length === 0) {
      return res.status(404).json({ message: 'Versets non trouvés' });
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getCurrentMonthMofonaina,
  getMofonainaByDateActive,
  getVersesByBookChapterAndRange,
};
