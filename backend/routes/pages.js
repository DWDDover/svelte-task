const express = require('express'); 
const router = express.Router(); 
const store = require('../store/profiles');

router.get('/', (req, res) => { 
    const profile = store.getProfiles();
    res.render('profiles', { profile });
 });

 router.get('/:id', (req, res) => { 
     const profile = store.getById(req.params.id); 
     res.render('profiles', { profile });
 });

 router.get('/edit', (req, res) => {
     const profile = store.getProfiles();
    res.render('edit', { profile });
});

 router.get('/:id/projects', (req, res) => {
     const profile = store.getById(req.params.id);
    res.render('projects', { profile });
});

router.post('/edit', (req, res) => {
    store.edit(req.body)
    res.redirect('/profiles'); 
});

module.exports = router;