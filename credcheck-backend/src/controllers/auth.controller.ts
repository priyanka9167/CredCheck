import * as authService from '../services/auth.service';
import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';

export const loginAuthController = async(req: Request, res: Response): Promise<void> => {
    try {
        const userData = await authService.loginAuth(req);
        if (userData) {
            const token = jwt.sign({_id: userData._id}, process.env.TOKEN_SECRET!);
            res.set('auth-token',token);
            res.send ({"data": userData});

        }     
    } catch (err) {
        console.log(err);
    }
}