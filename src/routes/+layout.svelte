<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import bgImage from '$lib/assets/bg.jpg';
	import Menu from '$lib/components/Menu.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="min-h-screen bg-cover bg-center bg-no-repeat" style={`background-image: url(${bgImage});`}>
	<Menu currentPath={page.url.pathname} />
	{@render children()}
</div>
