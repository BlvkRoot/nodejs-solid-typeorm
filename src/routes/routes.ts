import { createUserFactory } from './../modules/CreateUserFactory';
import { Router } from 'express';

const router = Router();

router.post('/users', (request, response) => createUserFactory().handle(request, response));

export { router }