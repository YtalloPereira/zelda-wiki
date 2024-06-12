const { api } = require('../api')

const getGames = async () => {
  const response = await api.get(`/games?limit=32`)
  .then(response => {
    const games=response.data.data;
    // games.forEach(game => {
    //   console.log(game);
    // });
    // return response.data
    console.log(games[31].name);
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getGames }