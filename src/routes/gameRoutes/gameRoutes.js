import { Router } from 'express'; 
const router  = Router(); 
import  getGames  from './getGames.js';
import  getGameById from './getGameById.js';
import  getGameByName from './getGameByName.js';
import getGameNames from './getGameNames.js';

router.get('/', getGames);

router.get('/names', getGameNames)

router.get('/games/:id',async(req,res)=>{
    const gameId = req.params.id;
    const game = await getGameById(gameId);

    console.log(game);
});

router.get('/games/search/:name', async(req,res)=>{
    const gameName = req.params.name;
    const game = await getGameByName(gameName);
    console.log(game);
});

export default router;
