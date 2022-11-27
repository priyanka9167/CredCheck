import { IUsersDocument,IUsersModel,IUsers } from "../types/user.types";
import userModel from "../models/users/user.schema";



export const createUser = async(user:IUsers):Promise<IUsersDocument> => {
    try{
     const new_user = await userModel.findOneOrCreate(user); 
     return new_user 
    }
    catch(e){
       console.log(e);
       throw e;
    }
}