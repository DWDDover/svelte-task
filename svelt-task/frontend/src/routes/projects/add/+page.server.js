import * as projectStore from '$lib/server/projects'; 
import * as technologyStore from '$lib/server/technologies';
import { redirect } from '@sveltejs/kit'; 

export function load() { 
    return { 
        technologies: technologyStore.getTechnologies()  
    }; 
} 

export const actions = { 
    default: async ({ request }) => { 
        const data = await request.formData(); 
        projectStore.addProject({ 
            title: data.get('title'), 
            description: data.get('description'), 
            status: data.get('status'), 
            technologies: data.getAll('technologies') 
        }); 
     redirect(303, '/projects');  
    } 
};