import express, {Request,Response} from 'express';
import * as UserController from '../controllers/user.controller';

export const router = express.Router();

router.post('/', UserController.createUserController);