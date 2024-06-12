const express = require('express'); 
const router  = express.Router(); 
const {getGames} = require('./getGames');

router.get('/test', (req,res)=>{
    res.send('deu certo');
});

router.get('/games/games', getGames);


module.exports = router;
