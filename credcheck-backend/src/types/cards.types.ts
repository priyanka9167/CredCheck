import { Model } from "mongoose";

export interface ICards {
    cardNumber: String,
    CVV: String,
    expiryDate: Date,
    bankName: String,
    cardType: String,
    billingCycle: Date,
    status: String
}

export interface ICardsDocument extends ICards, Document {

}

export interface ICardsModel extends Model<ICardsDocument> { }