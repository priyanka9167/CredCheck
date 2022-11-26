import * as userService from '../services/user.service';
import { IUsers, IUsersDocument,IUsersModel } from '../types/user.types';
import { Request,Response } from 'express';


export const createUserController = async(req:Request,res:Response): Promise<void> => {
    try{
      console.log("inside contoler request",req.body)

      const userData = await userService.createUser(req.body as IUsers);
      res.send({"data":userData});
    }
    catch(e)
    {
      console.log(e);
    }
}