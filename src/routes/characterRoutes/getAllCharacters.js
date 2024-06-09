const { api } = require('../api')

const getAllCharacters = async () => {
  const response = await api.get('/characters')
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getAllCharacters }