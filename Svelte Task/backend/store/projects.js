const path = require('path');
const fs = require('fs');
const dataPath = path.join(__dirname, "../data/projects.json");

function readProjects() {
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
};

function writeProjects(projects) {
    fs.writeFileSync(dataPath, JSON.stringify(projects, null, 4));
};

function getAll() {
    return readProjects();
};

function getById(id) {
    const projects = readProjects();
    return projects.find(p => p.id === parseInt(id));
};

function create(data) {
    const projects = readProjects();
    const ids = projects.map(p => p.id);
    const id = Math.max(0, ...ids) + 1;
    const newProject = { "id": id, "title": data.title,"description": data.description,"url": data.url, "status": data.status };
    projects.push(newProject);
    writeProjects(projects);
    return newProject;
};

function update(id, data) {
    const projects = readProjects();
    const index = projects.findIndex(p => p.id === parseInt(id));
    projects[index] = { id: parseInt(id), ...data };
    writeProjects(projects);
    return projects[index];
};

function remove(id) {
    const projects = readProjects();
    writeProjects(projects.filter((p) => p.id !== parseInt(id)));
};

module.exports = { getAll, getById, create, update, remove };