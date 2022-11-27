import mongoose, * as Mongoose from "mongoose";
import { IUsersDocument,IUsersModel,IUsers } from "../../types/user.types";


const userSchema = new Mongoose.Schema<IUsersDocument,IUsersModel>({
    firstname:String,
    lastname:String,
    username:String,
    password:String,
    gender:String,
    phone_number:Number,
    address:String,
    status:String,
    dob:String
});


userSchema.statics.findOneOrCreate = async function (
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
): Promise<IUsersDocument> {
    const userRecord = await this.findOne({
        username,phone_number
    });
    if(userRecord)
    {
        return userRecord
    }
    else{
        return this.create({
           
            firstname,
            lastname,
            username,
            password,
            gender,
            phone_number,
            address,
            status,
            dob 
        })
    }
}

const userModel = mongoose.model<IUsersDocument,IUsersModel>('user',userSchema)

export default userModel;