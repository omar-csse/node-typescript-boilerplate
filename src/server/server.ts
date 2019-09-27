import 'dotenv/config';
// import process from '../types/env'
import express from 'express'
import { Application } from 'express'
import bodyParser from 'body-parser'
import compression from 'compression';

import db from '../db/db'

const app:Application = express();
const port:number = Number(process.env.PORT) || 4000;
const localhost:string = 'http://localhost';

app.set('json spaces', 4)
app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


const main = () => {
    app.listen(port);
    db.connect();
    return console.info(`🚀  Server listening on ${localhost}:${port}`);
}

main();