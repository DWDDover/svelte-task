import { readFileSync } from 'fs'; 

const projects = JSON.parse(readFileSync('data/projects.json', 'utf8'));

export function getProjects() { 
    return projects; 
}