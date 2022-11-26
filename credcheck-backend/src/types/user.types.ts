import { Types } from "mongoose";
import { Document,Model } from "mongoose";

export interface IUsers{
    firstname:string,
    lastname:string,
    username:string,
    password:string,
    gender:string,
    phone_number:number,
    address:string,
    status:string,
    dob:Date,
 }

export interface IUsersDocument extends IUsers, Document {
    sameLastName: (this: IUsersDocument) => Promise<Document[]>;
}

export interface IUsersModel extends Model<IUsersDocument> {
    findOneOrCreate:(
        this:IUsersModel,
        {
          firstname,
            lastname,
            username,
            password,
            gender,
            phone_number,
            address,
            status,
            dob  
        }:IUsers
    ) => Promise<IUsersDocument>;
}