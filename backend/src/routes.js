import { Router } from 'express';

import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import SessionController from './app/controllers/SessionController';
import ProfileController from './app/controllers/ProfileController';

import AuthMiddleware from './app/middlewares/AuthMiddlewares';

const routes = Router();

routes.post('/session', SessionController.store);

routes.post('/ong', OngController.store);
routes.get('/ong', OngController.index);

routes.post('/incident', AuthMiddleware, IncidentController.store);
routes.get('/incident', IncidentController.index);
routes.get('/incident/:id', IncidentController.show);

routes.get('/profile', AuthMiddleware, ProfileController.index);

export default routes;
