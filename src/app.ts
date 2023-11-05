import express from 'express';
import { appDataSource } from "./data-source";
import * as cors from 'cors';
import routes from './routes';

const options: cors.CorsOptions = {
        methods: "GET, POST, PUT, DELETE",
        origin: "*"
    }

appDataSource.initialize().then(() => {
    const app = express();

    app.use(cors.default(options));

    app.use(express.json());
    
    app.use(routes);

    return app.listen(process.env.PORT);
})