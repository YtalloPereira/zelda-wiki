const { api } = require('../api')

const getGameById = async (gameId) => {
  const response = await api.get(`/games/${gameId}`)
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getGameById }