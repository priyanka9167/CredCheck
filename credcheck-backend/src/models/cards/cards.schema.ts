import mongoose, * as Mongoose from "mongoose";
import { ICardsDocument, ICardsModel } from "../../types/cards.types";

const cardsSchema = new Mongoose.Schema<ICardsDocument, ICardsModel>({
    cardNumber: {
        type: String,
        required: true
    },
    CVV: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    cardType: {
        type: String,
        required: true
    },
    billingCycle: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const cardModel = mongoose.model<ICardsDocument, ICardsModel>('card', cardsSchema);

export default cardModel;