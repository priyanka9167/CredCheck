import {  Request, Response, NextFunction } from "express";
import { IExpenditure } from "../types/expenditure.types";
import * as expenditureService from './../services/expenditure.service';

export const addExpenditureDetail = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const expenditureDetails = await expenditureService.addExpenditureDetail(req.body as IExpenditure);
        res.send({"expenditureDetails": expenditureDetails});
    } catch (err) {
        next(err);
    }
}

export const getExpenditureByCardId = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const expenditureDetails = await expenditureService.fetchExpenditureByCardId(req.params.id as string);
        res.send({"expenditure": expenditureDetails});
    } catch (err) {
        next(err);
    }
}
