<script>
    let { project } = $props();
</script>

<div class="rounded border p-4">
    <h2 class="text-lg font-semibold">{project.title}</h2>
    <p class="mt-1 text-sm text-gray-600">{project.description}</p>
    <p class="mt-1 text-sm text-gray-600">{project.status}</p>
    <p class="mt-1 text-sm text-gray-600">{project.technologies.join(', ')}</p>
    <span class="mt-2 inline-block text-xs font-medium">
        {project.status}
    </span>
    <br>
    <a href="/projects/{project.id}/edit">Edit</a>
</div>