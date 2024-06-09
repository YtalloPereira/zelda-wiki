const { api } = require('../api')

const getAllItems = async () => {
  const response = await api.get('/items')
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getAllItems }