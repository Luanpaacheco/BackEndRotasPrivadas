import { Router, Request, Response } from 'express';
import { Login } from '../services/login';
import { generateToke } from "../services/ganerateToke";

class login {
    async handle(request: Request, reply: Response) {
        try {
            const { password, email } = request.body as { password: string, email: string };
            
            const getByService = new Login();
            const user = await getByService.execute({ email, password });
            console.log(user.id);

            const generateByID = new generateToke();
            const token = await generateByID.execute(user.id, user.level);
            console.log(token);

            reply.status(200).json({ token });
        } catch (error: any) {
            reply.status(400).json({ error: error.message || "Erro ao realizar login" });
        }
    }
}

export { login };
