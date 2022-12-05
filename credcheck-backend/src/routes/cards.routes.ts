import express from 'express';
import * as CardController from './../controllers/card.controller';
import { authenticateToken } from '../middlewares/verify-jwt-token.middleware';


export const router = express.Router();

router.post('/', authenticateToken , CardController.addCardDetails);
router.get('/user/:id',authenticateToken,CardController.getUserCardDetails)
