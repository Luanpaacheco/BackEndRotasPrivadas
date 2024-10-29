import express from 'express';
import { routes } from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para permitir JSON
app.use(express.json());

// Usar as rotas definidas em routes.ts
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
