const path = require('path');
const fs = require('fs');

let dummyDatabase = {
    1: 'The Flash 047 (2018) (2 covers) (digital) (Minutemen-Thoth)'
};

module.exports = {
    
    getAllPages: (req, res) => {
        let comicId = req.params.id;
        let comicPath = path.join(__dirname, '/../', `${dummyDatabase[comicId]}`);
        let comicPages = fs.readdirSync(comicPath).map(file => file);
        res.json(comicPages);
    },
    
    getPage: (req, res) => {
        let id = req.params.id;
        let filename = req.params.filename;
        let pagePath = path.join(__dirname, '/../', `${dummyDatabase[id]}/${filename}`)
        res.sendFile(pagePath);
    }

};