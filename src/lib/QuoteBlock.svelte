<script>
	export let portableText;

	const { children } = portableText.value
	const quote = children[0].text
</script>

{#if portableText.value}
	<div class="blockquote">
		<p class="blockquote--quote">{quote}</p>
	</div>
{/if}

<style type="text/css">
	.blockquote {
		font-family: "Satoshi";
		padding: 1.8rem 2.4rem;
		border-left: solid 6px var(--border-gray);
	}
	.blockquote--quote {
		font-weight: 500;
	}
</style>


