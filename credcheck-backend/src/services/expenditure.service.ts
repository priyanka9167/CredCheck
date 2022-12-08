import { IExpenditure, IExpenditureDocument } from "../types/expenditure.types";
import expenditureModel from "../models/expenditure/expenditure.schema";

export const addExpenditureDetail = async (expenditure: IExpenditure): Promise<IExpenditureDocument> => {
    try {
        const newExpenditure = await expenditureModel.create(expenditure);
        return newExpenditure;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const fetchExpenditureByCardId = async (cardId: String): Promise<any> => {
    try {
        const expenditureDetails = await expenditureModel.find({card_id:{$gte: cardId}});
        return expenditureDetails;
    } catch (err) {
        console.log(err);
        throw err;
    }
}