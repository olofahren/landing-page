<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import FoldIn from '$lib/components/FoldIn.svelte';
	import Eyes from '$lib/components/Eyes.svelte';

    onMount(() => {
        gsap.fromTo(
            '.subtext',
            { y: 18, opacity: 0, filter: 'blur(10px)' },
            { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9 },
        );
    });

</script>

<section class="hero w-full h-screen flex items-center justify-center text-white">

    <div class="text-center px-8">
        <h1 class="text-4xl md:text-8xl font-semibold tracking-tight leading-[1.05]">
            <FoldIn>Tjena!</FoldIn>
        </h1>
        <p class="subtext mt-5 text-lg md:text-xl text-white">kul att du har hittat hit :) AAAAAAAAAAAAAAAAAAAAAAAAAaaa KATTEN TEST IGEN</p>
    </div>
</section>

<section>

</section>

<style scoped>  
    .hero {
        perspective: 1200px;
    }

    .subtext {
        will-change: transform, opacity, filter;
    }

</style>
