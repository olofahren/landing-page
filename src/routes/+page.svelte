<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import FoldIn from '$lib/components/FoldIn.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    let counter = $state(0);

    onMount(() => {
        gsap.fromTo(
            '.subtext',
            { y: 18, opacity: 0, filter: 'blur(10px)' },
            { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9 },
        );

        void (async () => {
            try {
                const res = await fetch('/api/visits', { method: 'POST' });
                const json = await res.json();
                if (!res.ok) {
                    console.error('Counter API error:', json);
                    return;
                }
                counter = json.count ?? 0;
            } catch (err) {
                console.error('Error updating/fetching visitor count:', err);
            }
        })();


    
    });

</script>

<section class="hero w-full h-screen flex items-center justify-center text-white">

    <div class="text-center px-8">
        <h1 class="text-4xl md:text-8xl font-semibold tracking-tight leading-[1.05]">
            <FoldIn>Tjena!</FoldIn>
        </h1>
        <p class="subtext mt-5 text-lg md:text-xl text-white">kul att du har hittat hit :)</p>
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
