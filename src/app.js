// app.js

import express from 'express';
import { join } from 'path';
import cors from 'cors';
import apiRouter from './routes/api.js';
import gameRouter from './routes/gameRoutes/gameRoutes.js';

const app = express();
const port = 3000;

// Middleware para permitir CORS (apenas para desenvolvimento local)
app.use(cors());

// Configuração para servir arquivos estáticos
app.use(express.static(join(process.cwd(), 'public')));

// Roteamento da API
app.use('/api', apiRouter);

// Roteamento das rotas de jogos
app.use('/games', gameRouter);

app.listen(port, () => {
    console.log(`Express rodando na porta ${port}`);
});
