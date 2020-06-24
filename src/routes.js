import { Router } from 'express';
import UserController from './app/controllers/UserController';
import PostController from './app/controllers/PostController';
import NewsFeedController from './app/controllers/NewsFeedController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/posts', PostController.store);
routes.get('/posts', PostController.index);

routes.get('/newsfeed', NewsFeedController.index);

export default routes;