import { IUsersDocument } from "../types/user.types";
import userModel from "../models/users/user.schema";

export const loginAuth = async(req: any) :Promise<any> => {
    try{
     const validatedUser = await userModel.findOne( {username: req.body.username, password: req.body.password}); 
     return validatedUser;
    }
    catch (e) {
       console.log(e);
    }
}