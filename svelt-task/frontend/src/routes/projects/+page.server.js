import * as store from '$lib/server/projects'; 

export function load() { 
    return { 
        projects: store.getProjects() 
    }; 
}