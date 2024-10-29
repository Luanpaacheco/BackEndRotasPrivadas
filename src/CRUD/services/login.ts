import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";
import {response} from "express";
// import {global} from '../../middlewares/global.middlewares'

interface GetUserProps {
    email: string;
    password: string;
}

class Login {
    async execute({ email, password }: GetUserProps) {
        try {
            if (!email || !password) {
                throw new Error("Email is required");
            }
            
            const user = await prismaClient.user.findUnique({
                where: { email },
            });

            if (!user) {
                throw new Error("Usuário não encontrado");
            }

            if (user.password !== password) {
                throw new Error("Senha incorreta");
            }

            return user;

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}


export { Login };