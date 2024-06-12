const { api } = require('../api')

const getGameById = async (gameId) => {
  const response = await api.get(`/games/${gameId}`)
  .then(response => {
      const { name, description, developer, publisher, released_date } = response.data.data
      const data = {name, description, developer, publisher, released_date}
      console.log(data)
      return data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getGameById }