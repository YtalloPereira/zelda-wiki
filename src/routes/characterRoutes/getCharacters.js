const { api } = require('../api')

const getAllCharacters = async (page) => {
  const response = await api.get(`/characters?limit=20&page=${page}`)
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getAllCharacters }