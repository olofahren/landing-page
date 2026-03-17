<script lang="ts">
	import { onMount } from 'svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import bgImage from '$lib/assets/bg.jpg';
	import cursor from '$lib/assets/cursor.svg';
	import Menu from '$lib/components/Menu.svelte';
	import Eyes from '$lib/components/Eyes.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	onMount(() => {
		const cursorElement = document.querySelector('.global-cursor') as HTMLElement | null;
		if (!cursorElement) return;

		document.body.classList.add('custom-cursor-active');

		const handleMouseMove = (e: MouseEvent) => {
			cursorElement.style.left = `${e.clientX}px`;
			cursorElement.style.top = `${e.clientY}px`;
			cursorElement.style.opacity = '1';
		};

		window.addEventListener('mousemove', handleMouseMove);

		window.addEventListener('click', () => {
			cursorElement.style.transform = 'translate(-5px, -5px) scale(0.8)';
			setTimeout(() => {
				cursorElement.style.transform = 'translate(-5px, -5px) scale(1)';
			}, 150);
			
		});

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			document.body.classList.remove('custom-cursor-active');
		};
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="global-cursor" aria-hidden="true">
	<img src={cursor} alt="" draggable="false" />
</div>
<div class="min-h-screen bg-cover bg-center bg-no-repeat" style={`background-image: url(${bgImage});`}>
	<Menu currentPath={page.url.pathname} />
	{@render children()}
</div>

<style>
	:global(body.custom-cursor-active),
	:global(body.custom-cursor-active *) {
		cursor: none !important;
	}

	.global-cursor {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 28px;
		height: 28px;
		pointer-events: none;
		transform: translate(-5px, -5px);
		opacity: 0;
		transition: transform 50ms ease-out, opacity 120ms ease-out;
	}

	.global-cursor img {
		width: 100%;
		height: 100%;
		display: block;
		filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.8));
	}
</style>
