<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let {
		as = 'span',
		innerAs = 'span',
		className = '',
		duration = 1.1,
		y = 38,
		ease = 'power3.out',
		delay = 0,
		children
	}: {
		as?: string;
		innerAs?: string;
		className?: string;
		duration?: number;
		y?: number;
		ease?: string;
		delay?: number;
		children?: () => any;
	} = $props();

	let target: HTMLElement;

	onMount(() => {
		if (!target) return;

		gsap.fromTo(
			target,
			{
				rotationX: -90,
				y,
				opacity: 0,
				transformOrigin: '50% 0%',
				transformPerspective: 1200
			},
			{
				rotationX: 0,
				y: 0,
				opacity: 1,
				duration,
				ease,
				delay
			}
		);
	});
</script>

<svelte:element this={as} class={`fold-wrap ${className}`}>
	<svelte:element this={innerAs} class="fold-content" bind:this={target}>
		{@render children?.()}
	</svelte:element>
</svelte:element>

<style>
	.fold-wrap {
		/* display: inline-block; */
		overflow: hidden;
	}

	.fold-content {
		/* display: inline-block; */
        flex-direction: row;
		line-height: 1.05;
		will-change: transform, opacity;
		backface-visibility: hidden;
	}
</style>
