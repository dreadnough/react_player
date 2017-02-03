const Express = require('express');
const router = Express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'test.mp3'));
   
})

module.exports =  router;