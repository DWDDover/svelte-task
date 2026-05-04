import { apiFetch } from "./fetch.js"; 

export function getProjects() { 
    return apiFetch("/projects"); 
} 

export function getProject(id) { 
    return apiFetch(`/projects/${id}`); 
} 

export function createProject(data) { 
    return apiFetch("/projects", { 
        method: "POST", body: JSON.stringify(data) 
    }); 
} 

export function updateProject(id, data) { 
    return apiFetch(`/projects/${id}`, { 
        method: "PUT", 
        body: JSON.stringify(data) 
    }); 
} 

export function deleteProject(id) { 
    return apiFetch(`/projects/${id}`,
         { method: "DELETE" }); 
}