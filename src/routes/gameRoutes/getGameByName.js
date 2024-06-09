const { api } = require('../api')

const getGameByName = async (gameName) => {
  const response = await api.get(`/games/?name=${gameName}`)
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getGameByName }
