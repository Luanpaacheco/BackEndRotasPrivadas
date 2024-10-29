import { Router, Request, Response } from 'express';
import {login} from './CRUD/controllers/loginController'
import {Create} from './CRUD/controllers/creatUser'
import {getUsers} from './CRUD/controllers/getUsersController'
import autentificacaoJWT from './middlewares/global.middlewares'

const router = Router();

router.get('/users', (req: Request, res: Response) => {
  return new getUsers().handle(req,res);
});

router.post('/login', (req: Request, res: Response) => {
    return new login().handle(req,res)
});

router.post('/create', (req: Request, res: Response) => {
    return new Create().handle(req,res)
});

router.get('/rotaPrivada', autentificacaoJWT, (req: Request, res: Response) => {
    res.json({message:"voce tem permissao"})
});


export const routes = router;
