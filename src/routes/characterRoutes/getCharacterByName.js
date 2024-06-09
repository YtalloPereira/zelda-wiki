const { api } = require('../api')

const getCharacterByName = async (charName) => {
  const response = await api.get(`/characters/?name=${charName}`)
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getCharacterByName }