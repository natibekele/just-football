<script>
	export let portableText;

	const { children } = portableText.value
	const listItems = children.map(child => child.children[0].text)
</script>

{#if portableText.value}
<ul class="unordered-list">
	{#each listItems as li}
		<li class="unordered-list-item"> {li} </li>
	{/each}
</ul>
{/if}

<style type="text/css">
	.unordered-list {
		font-family: "Satoshi";
/*		background: var(--border-gray);*/
		padding-top: 1.8rem;
		padding-bottom: 1.8rem;
	}
	.unordered-list-item {
		margin-bottom: 0.4rem;
	}
</style>


