const { api } = require('../api')

const getItemByName = async (itemName) => {
  const response = await api.get(`/items/?name=${itemName}`)
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getItemByName }