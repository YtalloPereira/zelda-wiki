const { api } = require('../api')

const getGameById = async (gameId) => {
  try {
      const response = await api.get(`/games/${gameId}`);
      const { name, description, developer, publisher, released_date } = response.data.data;
      const data = { name, description, developer, publisher, released_date };
      return data;
  } catch (error) {
      console.error(error);
      throw error;
  }
};

module.exports = { getGameById }