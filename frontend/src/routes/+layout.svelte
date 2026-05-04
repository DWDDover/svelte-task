<script>
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Nav from "$lib/Nav.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Nav />
<main class="mx-auto max-w-3xl px-6 py-8">{@render children()}</main>
