const aboutService = require('../services/about.service');

async function getAbout(req, res, next) {
  try {
    const about = await aboutService.getAbout(req.query.lang);
    res.json(about);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAbout
};