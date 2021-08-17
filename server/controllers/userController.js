const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');
const { User } = require('../models/models');

const generateJwt = (id, email, role) => jwt.sign(
  { id, email, role },
  process.env.SECRET_KEY,
  { expiresIn: '24h' },
);

class UserController {
   registration = async (req, res) => {
     const { email, password, role } = req.body;
     if (!email || !password) {
       return ApiError.badRequest('incorrect email or password1');
     }
     const candidate = await User.findOne({ where: { email } });
     if (candidate) {
       return ApiError.badRequest('incorrect email or password2');
     }
     const hashPassword = await bcrypt.hash(password, 5);
     const user = await User.create({ email, role, password: hashPassword });
     const token = generateJwt(user.id, user.email, user.role);
     return res.json({ token });
   }

   login = async (req, res, next) => {
     const { email, password } = req.body;
     const user = await User.findOne({ where: { email } });
     if (!user) {
       return next(ApiError.forbidden('incorrect email or password'));
     }
     const comparePassword = bcrypt.compareSync(password, user.password);
     if (!comparePassword) {
       return next(ApiError.badRequest('incorrect email or password'));
     }
     const token = generateJwt(user.id, user.email, user.role);
     return res.json({ token });
   }

   check = async (req, res) => {
     const token = generateJwt(req.user.id, req.user.email, req.user.role);
     return res.json({ token });
   }

   deleteUser = async (req, res) => {
     const { id } = req.params;
     try {
       const user = await User.findOne({ where: { id } });

       await user.destroy();

       return res.json({ message: 'User deleted' });
     } catch (e) {
       return res.status(500).json({ message: `${e} something is wrong` });
     }
   }
}

module.exports = new UserController();
