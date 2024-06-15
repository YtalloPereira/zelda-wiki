import api from '../api.js';

const getGameByName = async (req, res) => {
  const { gameName } = req.params; // Captura o gameName dos parâmetros da requisição
  try {
    const response = await api.get(`/games?name=${gameName}`);
    const data = response.data.data;
    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao obter o jogo por nome:', error);
    res.status(500).json({ error: 'Erro ao obter o jogo por nome' });
  }
};

export default getGameByName;
