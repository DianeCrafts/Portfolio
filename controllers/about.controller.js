const aboutService = require('../services/about.service');

function getAbout(req, res, next) {
  try {
    const about = aboutService.getAbout();
    res.json(about);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAbout
};