import { Request, Response, NextFunction } from "express";
import { ICardsModel, ICards } from "../types/cards.types";
import * as cardService from './../services/card.service';

export const addCardDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const cardData = await cardService.createCard(req.body as ICards);
        res.send({ "data": cardData });
    } catch (err) {
        next(err);
    }
}

export const getUserCardDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const cardData = await cardService.getCards(req.params.id as string);
        res.send({ "data": cardData });
    }
    catch (err) {
        next(err)
    }
}

