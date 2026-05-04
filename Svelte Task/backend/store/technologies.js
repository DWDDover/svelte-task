const fs = require('fs'); 

const path = require('path'); 

const dataPath = path.join(__dirname, '../data/technologies.json'); 

function getAll() { 
    return JSON.parse(fs.readFileSync(dataPath, 'utf8')); 
} 

module.exports = { getAll };