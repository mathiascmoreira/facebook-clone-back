import express from 'express';
import path from 'path';

import routes from './routes';

import cors from 'cors';

import './database';

class App {
    constructor() {
        this.server = new express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;