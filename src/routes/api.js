import axios from 'axios';

const api = axios.create({
  baseURL:'https://zelda.fanapis.com/api'
});

export default api;