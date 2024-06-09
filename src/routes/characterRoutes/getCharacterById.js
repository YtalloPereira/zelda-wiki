const { api } = require('../api')

const getCharacterById = async (charId) => {
  const response = await api.get(`/characters/${charId}`)
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getCharacterById }