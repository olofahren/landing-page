<script lang="ts">
    import FoldIn from '$lib/components/FoldIn.svelte';
    import duck from '$lib/assets/duck.svg';
</script>

<div class="w-screen h-screen flex items-center justify-center font-bold text-white flex-col">
    <div class="flex flex-row align-center justify-center self-center">
        <img src={duck} alt="duck on wheels" class="w-16 h-16 mr-4" />
        <h1 class="text-4xl self-center">"Oopie!"</h1>
    </div>
    <p>That page does not exist, or something else went wrong.</p>
    <p>Take a look at something else in the menu</p>

</div>
