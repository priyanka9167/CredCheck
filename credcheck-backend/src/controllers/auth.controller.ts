import * as authService from '../services/auth.service';
import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';

export const loginAuthController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const userData = await authService.loginAuth(req);
        if (userData) {
            const token = jwt.sign({_id: userData._id}, process.env.TOKEN_SECRET!);
            res.set('auth-token',token);
            const resPayload = {
                'id':userData['_id'] || '',
                'firstname': userData['firstname'] || '',
                'lastname': userData['lastname'] || '',
                'email': userData['email'] || '',
                'status': userData['status'],
                'username': userData['username']
            }
            res.send ({resPayload});

        }     
    } catch (err) {
        next(err);
        console.log(err);
        throw new Error("hello");
    }
}