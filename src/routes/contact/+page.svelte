<script lang="ts">
	import FoldIn from '$lib/components/FoldIn.svelte';
</script>

<section class="hero w-full h-screen flex items-center justify-center text-white">
	<div class="w-full max-w-2xl px-8 text-center">
		<ul class="mt-6 grid w-full gap-3 text-left">
			<li class="flex items-center justify-center md:justify-end py-1 gap-4">
				<FoldIn as="div" innerAs="div" className="flex flex-row gap-4">
					<div class="flex flex-row align-center gap-4">
						<a
							href="https://se.linkedin.com/in/olof-ahren"
							class="min-w-0 break-all text-left text-sm text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline md:text-base"
						>
							linkedin.com/in/olof-ahren
						</a>
						<div class="mr-3 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded">
							<img
								src="https://play-lh.googleusercontent.com/dWGBdDzI8mxlZqXT3qBt4eWmCaWLq-OXfZYea1hu6ODmMj1cLIeQak6Gsecn4zJoflE-"
								alt="LinkedIn icon"
								class="h-full w-full object-cover"
							/>
						</div>
					</div>
				</FoldIn>
			</li>

			<li class="flex items-center justify-center md:justify-end py-1">
				<FoldIn as="div" innerAs="div" className="flex flex-row gap-4" delay={0.08}>
					<div class="flex flex-row align-center gap-4">
						<a
							href="mailto:olof.murgarden@gmail.com"
							class="min-w-0 break-all text-left text-sm text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline md:text-base self-center"
						>
							olof.murgarden@gmail.com
						</a>
						<div class="mr-3 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded">
							<img
								src="src/lib/assets/profile.jpeg"
								alt="Email icon"
								class="h-full w-full object-cover"
							/>
						</div>
					</div>
				</FoldIn>
			</li>
		</ul>
	</div>
</section>

<style scoped>
	.hero {
		perspective: 1200px;
	}
</style>
