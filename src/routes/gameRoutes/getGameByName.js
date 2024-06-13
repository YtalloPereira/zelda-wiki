const { api } = require('../api') 
// o nome tem que estar na exata formatação da API, "Ocarina" tem retorno.
//"ocarina" não tem.
const getGameByName = async (gameName) => {
  try{
    const response = await api.get(`/games?name=${gameName}`);
    const data = response.data.data;
    //const data = { name, description, developer, publisher, released_date };
    //aqui colocar um loop de for each rodando e exibindo cada um dos atributos 
    return data;
  } catch (error){
    //console.error(error);
    throw error;
  }
};
module.exports = { getGameByName }
