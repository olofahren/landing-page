<script lang="ts">
	import FoldIn from '$lib/components/FoldIn.svelte';
</script>

<section class="hero w-full h-screen flex items-center justify-center text-white flex flex-col">
		<p class="subtext mt-5 text-lg md:text-xl text-white/90">Some text about me as a person might appear here in the future.</p>
        <p class="subtext mt-5 text-lg md:text-xl text-white/90">In the meantime, take a look at this amazing photo</p>
        <div class="mt-10 flex justify-center">
            <FoldIn as="div" innerAs="div" className="flex flex-row gap-4">
                <img
                    src="src/lib/assets/profile.jpeg"
                    class="h-auto w-64 rounded-lg object-cover"
                />
            </FoldIn>
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
