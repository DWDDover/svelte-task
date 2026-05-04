<script>
    import { onMount } from "svelte";
    import { createProject } from "$lib/api/projects";
    import { getTechnologies } from "$lib/api/technologies";
    import { goto } from "$app/navigation";

    let title = $state("");
    let description = $state("");
    let status = $state("in-progress");
    let technologies = $state([]);
    let options = $state([]);

    onMount(async () => {
        options = await getTechnologies();
    });

    async function handleSubmit() {
        await createProject({ title, description, status, technologies });
        goto("/projects");
    }
</script>

<h1 class="text-2xl font-bold">Add Project</h1>

<form
    on:submit|preventDefault={handleSubmit}
    class="mt-6 flex max-w-lg flex-col gap4"
>
    <label class="flex flex-col gap-1 text-sm font-medium">
        Title    <input
            bind:value={title}
            class="rounded border px-3 py-2 text-sm font-normal"
        />
    </label>
    <label class="flex flex-col gap-1 text-sm font-medium">
        Description    <textarea
            bind:value={description}
            class="rounded border px-3 py-2 text-sm fontnormal"
        ></textarea>
    </label>
    <label class="flex flex-col gap-1 text-sm font-medium">
        Status    <select
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
            Add Project
        </button>
        <a
            href="/projects"
            class="rounded px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
            Cancel
        </a>
    </div>
</form>
