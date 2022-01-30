const logger = require('../services/logger.service');

async function requireAuth(req, res, next) {
  if (!req.session?.user) {
    res.status(401).end('Unauthorized!');
    return;
  }
  next();
}

async function requireAdmin(req, res, next) {
  const user = req.session.user;
  if (!req.body.isReview && !user.isAdmin) {
    logger.warn(user.fullname + ' Attempt to perform admin action');
    res.status(403).end('Unauthorized Enough..');
    return;
  }
  next();
}

module.exports = {
  requireAuth,
  requireAdmin
};
