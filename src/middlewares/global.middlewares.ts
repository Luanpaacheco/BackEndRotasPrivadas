// global.middlewares.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const autentificacaoJWT = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(403).json({ message: "Acesso negado" });
        return; // Adicione um return aqui para garantir que não há mais execução
    }

    try {
        const secret = process.env.SECRET;
        if (!secret) {
            throw new Error("JWT secret is not defined in environment variables");
        }

        const decoded = jwt.verify(token, secret) as { level: number; Id: string };

        if (decoded.level !== 4) {
            res.status(403).json({ message: "Permissão insuficiente" });
            return; // Adicione um return aqui também
        }

        // Se tudo estiver certo, continue para o próximo middleware
        next();
    } catch (error) {
        res.status(401).json({ message: "Token inválido" });
        return; // E mais um return aqui
    }
};

export default autentificacaoJWT;
