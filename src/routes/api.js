const axios = require("axios")

const api = axios.create({
  baseURL:'https://zelda.fanapis.com/api'
})

module.exports = { api }