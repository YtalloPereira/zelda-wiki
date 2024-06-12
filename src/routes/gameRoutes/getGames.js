const { api } = require('../api')

const getGames = async () => {
  const response = await api.get(`/games?limit=32`)
  .then(response => {

      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getGames }