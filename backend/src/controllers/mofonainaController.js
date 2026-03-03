const mofonainaServices = require('../services/mofonainaService');

const getCurrentMonthMofonaina = async (req, res) => {
  const result = await mofonainaServices.getCurrentMonthMofonaina();
  res.json(result);
};
const getMofonainaByDateActive = async (req, res) => {
  const { dateActive } = req.params;
  const result = await mofonainaServices.getMofonainaByDateActive(dateActive);
  res.json(result);
};
const getVersesByBookChapterAndRange = async (req, res) => {
  const { livreId, chapitre, verset_debut, verset_fin } = req.params;
  const result = await mofonainaServices.getVersesByBookChapterAndRange(
    livreId,
    chapitre,
    verset_debut,
    verset_fin,
  );
  res.json(result);
};
module.exports = {
  getCurrentMonthMofonaina,
  getMofonainaByDateActive,
  getVersesByBookChapterAndRange,
};
