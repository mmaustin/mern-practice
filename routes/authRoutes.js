import express from 'express'
const router = express.Router();


import { register, login, updateUser, getCurrentUser, logout } from '../controllers/authController.js';
import authenticateUser from '../middleware/auth.js'

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').patch(authenticateUser, updateUser);
router.route('/getCurrentUser').get(authenticateUser, getCurrentUser);
router.route('/logout').get(logout);


export default router;


