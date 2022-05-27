import express from 'express';

import { AppDataSource } from "./database/connect";

import routes from './routes';

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use(express.json());
    app.use(routes);
    
    app.listen(3000, () => console.log("started server 🔥"))

}).catch(error => console.log(error))

