import api from '../api.js';


const getGameById = async (req, res) => {
  const { gameId } = req.params; // Captura o gameId dos parâmetros da requisição
  try {
    const response = await api.get(`/games/${gameId}`);
    const { name, description, developer, publisher, released_date } = response.data.data;
    const data = { name, description, developer, publisher, released_date };
    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao obter o jogo:', error);
    res.status(500).json({ error: 'Erro ao obter o jogo' });
  }
};

export default getGameById;
