const { api } = require('../api')

const getItemById = async (itemId) => {
  const response = await api.get(`/items/${itemId}`)
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getItemById }