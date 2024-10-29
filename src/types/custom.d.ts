// types/custom.d.ts
import { Request } from 'express';

declare module 'express-serve-static-core' {
    interface Request {
        user?: { level: number; Id: string }; // Adicionando a propriedade user
    }
}
