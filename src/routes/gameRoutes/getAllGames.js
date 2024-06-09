const { api } = require('../api')

const getAllGames = async () => {
  const response = await api.get('/games')
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getAllGames }