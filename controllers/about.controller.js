const aboutService = require('../services/about.service');

function getAbout(req, res, next) {
  try {
    const { lang } = req.query;
    const about = aboutService.getAbout(lang);
    res.json(about);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAbout
};