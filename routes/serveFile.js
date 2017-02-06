const Express = require('express');
const router = Express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
    const testFolder = path.join(__dirname, '../public/music');
    fs.readdir(testFolder, (err, files) => {
        console.log('files', files);
        res.send(files);
    })
});

router.get('/:filename', (req, res) => {
    var filename = req.params.filename;
    console.log('filename',filename);
    res.sendFile(path.join(__dirname, '../public/music', filename));
});




module.exports = router;