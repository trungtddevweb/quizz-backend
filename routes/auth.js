import express from 'express';
import { loginController, logoutController, registerController } from '../controllers/auth.js'
import { checkResult } from '../controllers/result.js';

const router = express.Router();

router.post('/auth/login', loginController)

router.post('/auth/logout', logoutController);

router.post('/auth/register', registerController);

router.post('/result-test', checkResult)


export default router;