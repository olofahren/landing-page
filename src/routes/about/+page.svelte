<script lang="ts">
	import FoldIn from '$lib/components/FoldIn.svelte';
    import profileImg from '$lib/assets/profile.jpeg';

</script>

<section class="hero w-full h-screen flex items-center justify-center text-white flex flex-col">
	<div class="max-w-2/3 px-8 text-center about-text">	
        <FoldIn><p class="subtext mt-5 text-white text-xl tracking-tighter">Halloj, det är jag som är Olof!</p></FoldIn>
            <FoldIn><p class="subtext mt-5 text-sm text-white/90 ">Vill du kontakta mig, kolla in kontaktsidan i menyn. Annars kan du avnjuta min fina profilbild :p</p></FoldIn>
            <div class="mt-10 flex justify-center">
                <FoldIn as="div" innerAs="div" className="flex flex-row gap-4">
                    <!-- svelte-ignore a11y_img_redundant_alt -->
                    <img
                        src={profileImg}
                        class="h-auto w-64 rounded-lg object-cover"
                        alt="profile picture"
                    />
                </FoldIn>
        </div>
    </div>
</section>

<style scoped>
	.hero {
		perspective: 1200px;
	}

	.subtext {
		will-change: transform, opacity, filter;
	}
</style>
