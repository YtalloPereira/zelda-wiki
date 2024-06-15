import { Router } from 'express';
import api from '../api.js';

const getGames = async (req, res) => {
  try {
    const response = await api.get('/games?limit=32');
    const games = response.data.data;
    res.status(200).json(games);
  } catch (error) {
    console.error('Erro ao obter os jogos:', error);
    res.status(500).json({ error: 'Erro ao obter os jogos' });
  }
};

export default getGames;
