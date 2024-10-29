import { Router, Request, Response } from 'express';
import {CreateUserService} from '../services/createUser'

class Create{
    async handle(request:Request, reply:Response){

        const{password,email,name,level}=request.body as {password:string, email:string, name:string, level:number};

        const userService = new CreateUserService()

        const user = await userService.execute({password,email,name,level});

        reply.send(user+"usuario criado")
    }
}

export{Create};