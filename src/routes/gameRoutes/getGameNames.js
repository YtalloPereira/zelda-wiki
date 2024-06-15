// routes/gameRoutes/getGameNames.js

import api from '../api.js';

const getGameNames = async (req, res) => {
  try {
    const response = await api.get(`/games?limit=32`);
    const games = response.data.data.map(game => game.name); // Extrai apenas os nomes dos jogos
    const gamesFinal = [...new Set(games)]; // Removendo jogo repetido
    res.status(200).json(gamesFinal); // Retorna os nomes dos jogos como JSON com status 200
  } catch (error) {
    console.error('Erro ao obter os nomes dos jogos:', error);
    res.status(500).json({ error: 'Erro ao obter os nomes dos jogos' }); // Retorna um erro interno do servidor com status 500
  }
}


export default getGameNames;
