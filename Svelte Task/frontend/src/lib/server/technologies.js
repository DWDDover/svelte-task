import { readFileSync } from 'fs'; 

const technologies = JSON.parse(readFileSync('data/technologies.json', 'utf8'));

export function getTechnologies() { 
    return technologies; 
}