import { ITrasactions, ITrasactionDocument } from "../types/transaction.types";
import transactionModel from "../models/transactions/transaction.schema";

export const addTransactionDetail = async (transaction: ITrasactions): Promise<ITrasactionDocument> => {
    try {
        const newTransaction = await transactionModel.create(transaction);
        return newTransaction;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const fetchTransactionByCardId = async (cardId: String): Promise<any> => {
    try {
        const transactionDetails = await transactionModel.find({card_id: cardId});
        return transactionDetails;
    } catch (err) {
        console.log(err);
        throw err;
    }
}