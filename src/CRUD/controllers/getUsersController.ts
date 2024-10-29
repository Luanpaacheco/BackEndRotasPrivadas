import { Request, Response } from "express";
import {List} from '../services/getUser'

class getUsers{
    async handle(req:Request, reply:Response){
        const list = new List();

        const users = await list.execute();

        reply.send(users)

    }
}
export {getUsers};