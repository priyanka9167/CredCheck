import mongoose, * as Mongoose from "mongoose";
import { IUsersDocument,IUsersModel,IUsers, IUserLoginCred } from "../../types/user.types";

const userSchema = new Mongoose.Schema<IUsersDocument,IUsersModel>({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type:String
    },
    phone_number: {
        type:Number
    },
    address: {
        type: String
    },
    status: { 
        type: String
    },
    dob: { 
        type: Date
    },
   
});


userSchema.statics.findOneOrCreate = async function (
    this:IUsersModel,
    {
        firstname,
        lastname,
        username,
        email,
        password,
        gender,
        phone_number,
        address,
        status,
        dob
    }:IUsers
): Promise<IUsersDocument | String> {
    const userRecord = await this.findOne({
        username,email
    });
    if(userRecord)
    {
        return 'User Already exist'
    }
    else{
        return this.create({
           
            firstname,
            lastname,
            username,
            email,
            password,
            gender,
            phone_number,
            address,
            status : 'ACTIVE',
            dob 
        })
    }
}





const userModel = mongoose.model<IUsersDocument,IUsersModel>('user',userSchema)

export default userModel;