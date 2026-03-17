<script lang="ts">
	let { children } = $props();
</script>

<div class="min-h-screen text-neutral-900">
	{@render children()}
</div>
