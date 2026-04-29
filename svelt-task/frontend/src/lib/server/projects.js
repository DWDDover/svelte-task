import { readFileSync, writeFileSync } from 'fs';

let projects = JSON.parse(readFileSync('data/projects.json', 'utf8'));

export function getProjects() {
    return projects;
}

function save() { 
    writeFileSync('data/projects.json', JSON.stringify(projects, null, 2), 'utf8'); 
} 

export function addProject(data) { 
    const id = Math.max(...projects.map(p => p.id), 0) + 1; 
    const project = { id, ...data }; projects = [...projects, project]; 
    save(); 
} 

export function updateProject(id, project) { 
    projects = projects.map(p => p.id === id ? { ...p, ...project } : p); 
    save(); 
} 

export function deleteProject(id) { 
    projects = projects.filter(p => p.id !== id); save(); 
}