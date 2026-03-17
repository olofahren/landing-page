<script lang="ts">
	import FoldIn from '$lib/components/FoldIn.svelte';
</script>

<section class="hero w-full h-screen flex items-center justify-center text-white">
	<div class="text-center px-8">
		<h1 class="text-4xl md:text-8xl font-semibold tracking-tight leading-[1.05]">
			<FoldIn>About</FoldIn>
		</h1>
		<p class="subtext mt-5 text-lg md:text-xl text-white/90">Minimal about page structure.</p>
	</div>
</section>

<style>
	.hero {
		perspective: 1200px;
	}

	.subtext {
		will-change: transform, opacity, filter;
	}
</style>
