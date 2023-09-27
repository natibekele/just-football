<script>
	import PostSummary from "./PostSummary.svelte"
	export let suggestedPosts	
</script>


<div class="grid">
	{#if suggestedPosts && suggestedPosts.length}
		{#each suggestedPosts as post}
			<PostSummary post={post}/>
		{/each}

	{/if}
</div>

<style type="text/css">
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: auto;
	}

	@media(max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
