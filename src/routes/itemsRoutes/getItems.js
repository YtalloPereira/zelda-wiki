const { api } = require('../api')

const getAllItems = async (page) => {
  const response = await api.get(`/items?limit=20&page=${page}`)
  .then(response => {
      console.log(response.data)
      return response.data
  })
  .catch(error => {
      console.error(error)
  })
}

module.exports = { getAllItems }