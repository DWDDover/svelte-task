<script>
    let { data } = $props();
    import ProjectCard from '$lib/ProjectCard.svelte';
    console.log(data.projects);
    let search = $state('');
    let filtered = $derived( data.projects.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) ) );
</script>

<h1>Projects</h1>

<br>

<a href="/projects/add">Add Project</a>
<br>

<br>

<input bind:value={search} placeholder="Search projects…" class="w-full rounded border px-3 py-2 text-sm" />
<br>
<p>{filtered.length} project(s)</p>
<br>

<ul>
{#each filtered as project}
<ProjectCard {project} />
<br>
{/each}
</ul>