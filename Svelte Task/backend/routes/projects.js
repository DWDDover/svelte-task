const express = require('express');
const router = express.Router();
const store = require('../store/projects');
const { projectSchema } = require('../schemas/project');

function validate(body, next) { 
    const result = projectSchema.safeParse(body); 
    if (result.success) return result.data; 
    const err = new Error('Validation failed'); 
    err.status = 422; 
    err.details = result.error.errors.map(e => ({ field: String(e.path[0]), message: e.message }));
    next(err); 
    return null; 
}

router.get('/', (req, res) => {
    const projects = store.getAll();
    res.json(projects);
});

router.get('/:id', (req, res) => {
    const project = store.getById(req.params.id);
    res.json(project);
});

router.post('/', (req, res, next) => {
     const data = validate(req.body, next);
     if (!data) return;

    project = store.create(req.body);
    res.status(201).location(`/api/projects/${project.id}`).json(project);
});

router.put('/:id', (req, res, next) => {
    const data = validate(req.body, next); 
    if (!data) return;

    project = store.update(req.params.id, req.body);
    res.status(200).location(`/api/projects/${project.id}`).json(project);
});

router.delete('/:id', (req, res) => {
    store.remove(req.params.id);
    res.status(204).send();
});


module.exports = router;