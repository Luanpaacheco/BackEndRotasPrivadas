import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()

class generateToke{
    async execute(id: string, level:number){
        const secret = process.env.SECRET;

        if (!secret) {
            throw new Error("erro no secret no env");
        }
        const generateToke =  jwt.sign({id:id,level:level}, secret,{expiresIn:60} )
        return generateToke;
    }
}

export {generateToke};