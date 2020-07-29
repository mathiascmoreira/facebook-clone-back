import { Router } from 'express';
import UserController from './app/controllers/UserController';
import PostController from './app/controllers/PostController';
import NewsFeedController from './app/controllers/NewsFeedController';
import SessionController from './app/controllers/SessionController';
import ProfileController from './app/controllers/ProfileController';
import FileController from './app/controllers/FileController';
import FriendshipController from './app/controllers/FriendshipController';

import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig); 

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/posts', PostController.store);
routes.get('/posts/:userId', PostController.index);

routes.get('/newsfeed', NewsFeedController.index);

routes.get('/profiles/:username', ProfileController.index);

routes.get('/friendships', FriendshipController.index)

//rota para o recebimento dos arquivos. O metodo single, significa que a rota receberá apenas um arquivo por vez
routes.post('/files', upload.single('file'), FileController.store);

export default routes;