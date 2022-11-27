import express, {Express,Request,Response} from 'express';
import bodyParser from 'body-parser';
import cors from  'cors';
import dotenv from 'dotenv';
import {connectDb} from "./db/db";
import * as UserRoutes from './routes/user.routes';


dotenv.config();





const app:Express = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const port = process.env.PORT;
connectDb();


app.use('/users',UserRoutes.router)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});