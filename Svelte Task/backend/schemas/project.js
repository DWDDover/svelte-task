const { z } = require('zod');

const projectSchema = z.object({ 
    title: z.string()
        .min(1, 'Title is required')
        .max(100, 'Title must be 100 characters or fewer'), 
    description: z.string()
        .min(1, 'Description is required'), 
    status: z.enum(['planned', 'in-progress', 'complete'], { errorMap: () => ({ message: 'Status must be planned, in-progress, or complete' }) }), 
    technologies: z.array(z.string()).min(1, 'At least one technology is required') 
}); 
    
module.exports = { projectSchema };