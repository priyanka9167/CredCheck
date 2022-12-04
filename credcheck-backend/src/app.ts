import express, { Express } from 'express';
import errorHandler  from './middlewares/error-handler.middleware';
import bodyParser from 'body-parser';
import cors from  'cors';
import dotenv from 'dotenv';
import {connectDb} from "./db/db";
import * as UserRoutes from './routes/user.routes';
import * as AuthRoutes from './routes/auth.routes';
import * as PaymentRoutes from './routes/payment.routes';
import { authenticateToken } from './middlewares/verify-jwt-token.middleware';


dotenv.config();

const app:Express = express();
app.use(cors({
  exposedHeaders: ['Content-Length', 'auth-token'],
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT;
connectDb();


app.use('/users',UserRoutes.router);
app.use('/login', AuthRoutes.router);
app.use('/payment',authenticateToken,PaymentRoutes.router);

// add custom error handler middleware as the last middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});