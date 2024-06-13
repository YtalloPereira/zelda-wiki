const express = require('express'); 
const router  = express.Router(); 
const { getGames } = require('./getGames');
const { getGameById } = require('./getGameById');
const { getGameByName } = require('./getGameByName');

router.get('/', getGames);

router.get('/games/:id',async(req,res)=>{
    const gameId = req.params.id;
    const game = await getGameById(gameId);

    console.log(game);
});

router.get('/game?:name', getGameByName);

module.exports = router;
