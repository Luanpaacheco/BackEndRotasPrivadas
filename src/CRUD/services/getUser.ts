import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

class List {
    async execute() {

        
        const users = await prismaClient.user.findMany({});


        return users;
    }
}

export { List };