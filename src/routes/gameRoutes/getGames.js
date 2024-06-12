const { api } = require('../api')

const getGames = async (page) => {
  const response = await api.get(`/games?limit=32&page=${page}`)
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getGames }