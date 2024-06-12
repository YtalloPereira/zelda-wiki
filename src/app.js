const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const {api} = require('./routes/api')
const gameRoutes = require('./routes/gameRoutes/gameRoutes');

app.listen(port, () => {
    console.log(`Express rodando na porta ${port}`);
})

app.use('/', gameRoutes);



/*
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname,'views', 'index.html'));
})
*/
/*
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


getItemByName('Sword')


const gameId = document.getElementById('gameId')
const btngo = document.getElementById('btn-go')
const content = document.getElementById('content')

const fetchApi = (value) => {
    const result = fetch(`https://zelda.fanapis.com/api/games/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return data
    })
    return result
}

btngo.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(gameId.value);
    content.textContent = `${JSON.stringify(result.data.description, undefined, 2)}`
});
*/