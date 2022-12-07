import express from 'express';
import * as CardController from './../controllers/card.controller';


export const router = express.Router();

router.post('/', CardController.addCardDetails);
router.get('/user/:id',CardController.getUserCardDetails);
router.get('/:id', CardController.getCardDetails);
