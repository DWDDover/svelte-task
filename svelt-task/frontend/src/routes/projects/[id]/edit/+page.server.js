import * as projectStore from '$lib/server/projects'; 
import * as technologyStore from '$lib/server/technologies'; 
import { error, redirect } from '@sveltejs/kit'; 

export function load({ params }) { 
    const id = Number(params.id); 
    const project = projectStore.getProjects().find(p => p.id === id); 
    if (!project) { 
        error(404, 'Project not found');  
    } 
    return {  
        project, 
        technologies: technologyStore.getTechnologies()  
    }; 
} 

export const actions = { 
    update: async ({ request, params }) => { 
        const id = Number(params.id); 
        const data = await request.formData(); 
        projectStore.updateProject(id, { 
            title: data.get('title'), 
            description: data.get('description'), 
            status: data.get('status'), 
            technologies: data.getAll('technologies') 
          }); 
          redirect(303, '/projects');  }, 
          delete: async ({ params }) => { 
            const id = Number(params.id); 
            projectStore.deleteProject(id); 
            redirect(303, '/projects');  
        } 
    };