const express = require('express'); 
const router = express.Router(); 
const store = require('../store/projects');

router.get('/', (req, res) => { 
    const projects = store.getAll(); 
    res.json(projects); 
});

router.get('/:id', (req, res) => { 
    const project = store.getById(req.params.id); 
    res.json(project);
});

router.post('/', (req, res) => {
    project = store.create(req.body);
    res.status(201).location(`/api/projects/${project.id}`).json(project);
});

router.put('/:id', (req, res) => {
    project = store.update(req.params.id, req.body);
    res.status(200).location(`/api/projects/${project.id}`).json(project);
});

router.delete('/:id', (req, res) => {
    store.remove(req.params.id);
    res.status(204).send();
});


module.exports = router;