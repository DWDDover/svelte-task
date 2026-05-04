const express = require('express'); 

const router = express.Router(); 

const store = require('../store/technologies'); 

router.get('/', (req, res) => { 
    res.json(store.getAll()); 
}); 

module.exports = router;