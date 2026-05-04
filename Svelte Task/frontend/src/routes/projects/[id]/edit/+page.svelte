<script>
    import { onMount } from "svelte";
    import {
        getProject,
        updateProject,
        deleteProject,
    } from "$lib/api/projects";
    import { getTechnologies } from "$lib/api/technologies";
    import { goto } from "$app/navigation";
    import { page } from "$app/state";

    const id = page.params.id;

    let title = $state("");
    let description = $state("");
    let status = $state("");
    let technologies = $state([]);
    let options = $state([]);

    onMount(async () => {
        const project = await getProject(id);
        options = await getTechnologies();
        title = project.title;
        description = project.description;
        status = project.status;
        technologies = [...project.technologies];
    });

    async function handleUpdate() {
        await updateProject(id, { title, description, status, technologies });
        goto("/projects");
    }
    async function handleDelete() {
        await deleteProject(id);
        goto("/projects");
    }
</script>

<h1 class="text-2xl font-bold">Edit Project</h1>
<form
    on:submit|preventDefault={handleUpdate}
    class="mt-6 flex max-w-lg flex-col gap4"
>
    <label class="flex flex-col gap-1 text-sm font-medium">
        Title <input
            bind:value={title}
            class="rounded border px-3 py-2 text-sm font-normal"
        />
    </label>
    <label class="flex flex-col gap-1 text-sm font-medium">
        Description <textarea
            bind:value={description}
            class="rounded border px-3 py-2 text-sm fontnormal"
        ></textarea>
    </label>
    <label class="flex flex-col gap-1 text-sm font-medium">
        Status <select
            bind:value={status}
            class="rounded border px-3 py-2 text-sm font-normal"
        >
            <option value="in-progress">In Progress</option>
            <option value="complete">Complete</option>
        </select>
    </label>
    <fieldset class="flex flex-col gap-1">
        <legend class="text-sm font-medium">Technologies</legend>
        <div class="mt-1 flex flex-wrap gap-3">
            {#each options as option}
                <label class="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        bind:group={technologies}
                        value={option}
                    />
                    {option}
                </label>
            {/each}
        </div>
    </fieldset>
    <div class="flex gap-3">
        <button
            type="submit"
            class="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
            Save Changes
        </button>
        <a
            href="/projects"
            class="rounded px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
            Cancel
        </a>
    </div>
</form>
<button
    on:click={handleDelete}
    class="mt-4 rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red700"
>
    Delete Project
</button>
