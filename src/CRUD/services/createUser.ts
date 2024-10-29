import prismaClient from "../../prisma";

interface CreateUserProps{
    password:string;
    name:string;
    email:string;
    level:number;
}

class CreateUserService{
    async execute({password,name,email,level}:CreateUserProps){

        if(!password||!name||!email||!level){
            throw new Error("preencha todos os campos")
        }

        if(!(1<=level&&level<=4)){
            throw new Error("Level precisa ser entre 1 e 4")
        }

        const testeUser = await prismaClient.user.findUnique({
            where:{
                email:email
            }
        })

        if(testeUser){
            throw new Error("name ja cadastrado")
        }


        const user = await prismaClient.user.create({
            data:{
                password,
                name,
                email,
                level
            }
        })

        return user
    }
    
}

export {CreateUserService}