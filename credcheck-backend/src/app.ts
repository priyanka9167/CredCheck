import express, { Express } from 'express';
import errorHandler  from './middlewares/error-handler.middleware';
import bodyParser from 'body-parser';
import cors from  'cors';
import dotenv from 'dotenv';
import {connectDb} from "./db/db";
import * as UserRoutes from './routes/user.routes';
import * as AuthRoutes from './routes/auth.routes';
<<<<<<< HEAD
import * as CardRoutes from './routes/cards.routes';
=======
import * as PaymentRoutes from './routes/payment.routes';
import { authenticateToken } from './middlewares/verify-jwt-token.middleware';
>>>>>>> dae47c50e3b57f89bbbc5de33f6ba285797e4bde


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
<<<<<<< HEAD
app.use('/card', CardRoutes.router);
=======
app.use('/payment',authenticateToken,PaymentRoutes.router);
>>>>>>> dae47c50e3b57f89bbbc5de33f6ba285797e4bde

// add custom error handler middleware as the last middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});