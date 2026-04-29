<script>
    import { enhance } from "$app/forms";
    let { data } = $props();
</script>

<h1 class="text-2xl font-bold">Add Project</h1>

<form method="POST" use:enhance class="mt-6 flex max-w-lg flex-col gap-4">
    <label class="flex flex-col gap-1 text-sm font-medium">
        Title <input
            type="text"
            name="title"
            class="rounded border px-3 py-2 text-sm fontnormal"
        />
    </label>
    <label class="flex flex-col gap-1 text-sm font-medium">
        Description <textarea
            name="description"
            class="rounded border px-3 py-2 text-sm font-normal"
        >
        </textarea>
    </label>
    <label class="flex flex-col gap-1 text-sm font-medium">
        Status <select
            name="status"
            class="rounded border px-3 py-2 text-sm font-normal"
        >
            <option value="in-progress">In Progress</option>
            <option value="complete">Complete</option>
        </select>
    </label>
    <fieldset class="flex flex-col gap-1">
        <legend class="text-sm font-medium">Technologies</legend>
        <div class="mt-1 flex flex-wrap gap-3">
            {#each data.technologies as option}
                <label class="flex items-center gap-2 text-sm">
                    <input type="checkbox" name="technologies" value={option} />
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
