const express = require('express'); 
const router = express.Router(); 
const store = require('../store/profiles');

router.get('/profiles', (req, res) => { 
    const profile = store.getProfile();
    res.render('profiles', { profile });
 });

router.get('/profiles/edit', (req, res) => {
    const profile = store.getProfile();
    res.render('edit', { profile });
});

router.post('/profiles/edit', (req, res) => {
    store.edit(req.body)
    res.redirect('/profiles'); 
});

module.exports = router;

