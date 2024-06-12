const express = require('express'); 
const router  = express.Router(); 
const { getGames } = require('./getGames');
const { getGameById } = require('./getGameById');
const { getGameByName } = require('./getGameByName');

router.get('/', getGames);

router.get('/games/:id', getGameById) ;

router.get('/game?:name', getGameByName);

module.exports = router;
