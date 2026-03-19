<script lang="ts">
	import { onMount } from "svelte";
	import Eyes from "./Eyes.svelte";

	let { currentPath = '/' }: { currentPath?: string } = $props();
	let counter = $state(0);

	const isActive = (path: string) => currentPath === path;

	onMount(() => {
		        void (async () => {
            try {
                const res = await fetch('/api/visits', { method: 'GET' });
                const json = await res.json();
				console.log('Visitor count API response:', json);
                if (!res.ok) {
                    console.error('Counter API error:', json);
                    return;
                }
                counter = json.count ?? 0;
            } catch (err) {
                console.error('Error updating/fetching visitor count:', err);
            }
        })();
	})



</script>

<div class="absolute bottom-0 right-0 z-20 flex flex-col items-end justify-end overflow-visible">

	<div class="mr-10 mb-2 flex flex-col items-end">
		<div class="bg-white rounded-full p-4">
			<p class="text-sm text-black text-center whitespace-nowrap">Du är besökare {counter}</p>
		</div>
		<div class="-mt-3 mr-6 h-8 w-4 rotate-45 bg-white rounded-tr-sm rounded-br-md rounded-bl-md"></div>
	</div>
	
	<div class="mr-10 rounded-t-4xl bg-zinc-900">
		<Eyes></Eyes>
	</div>
</div>

<nav class="site-menu fixed left-20 top-1/2 z-10 -translate-y-1/2 mt-4" aria-label="Main navigation">
	<ul>
		<li class:active={isActive('/')}><a href="/" aria-current={isActive('/') ? 'page' : undefined}>home</a></li>
		<li class:active={isActive('/about')}><a href="/about" aria-current={isActive('/about') ? 'page' : undefined}>about</a></li>
		<li>
			hobby projects
			<ul class="pl-2">
				<li><a href="https://bus.olof.site">Västertull tidstabell for rpi displays</a></li>
                <li><a href="https://github.com/olofahren/GooglePhotosMetadataFixer">Google Photos Metadata fixer</a></li>
			</ul>
		</li>
		<li class:active={isActive('/contact')}><a href="/contact" aria-current={isActive('/contact') ? 'page' : undefined}>contact</a></li>
	</ul>
</nav>

<style>
	.site-menu li {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
			monospace;
		color: rgb(255, 255, 255);
		transition:
			transform 220ms ease-in-out,
			color 220ms ease-in-out,
			letter-spacing 220ms ease-in-out,
			opacity 220ms ease-in-out;
	}

	.site-menu li:hover {
		transform: translateX(6px);
		color: rgb(255, 255, 255);
		letter-spacing: 0.02em;
		opacity: 1;
	}

	.site-menu li.active {
		color: rgba(255, 255, 255, 0.691);
	}

	.site-menu a {
		color: inherit;
		text-decoration: none;
	}

    @media (max-width:900px){
        .site-menu{
            top:10%;
            left: 10%;
        }
    }

</style>