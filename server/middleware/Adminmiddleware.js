const jwt = require('jsonwebtoken');

module.exports = (role) => (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      res.status(401).json({ message: 'not authorized' });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.role !== role) {
      res.status(403).json({ message: 'you have no rights' });
    }
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: 'not authorized' });
  }
};
