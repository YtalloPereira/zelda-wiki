const { api } = require('../api')

const getGames = async () => {
  const response = await api.get(`/games?limit=32`)
  .then(response => {
    const games=response.data.data;
    console.log(games);
    return games;
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getGames }