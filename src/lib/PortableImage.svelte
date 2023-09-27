<script>
	export let portableText;

	const { url } = portableText.value
</script>

{#if portableText.value}
	<div class="image-container">
		<img class="article-image" src={url} alt="need subheadings for alt"/>
	</div>
{/if}

<style type="text/css">
	.image-container {
		margin-left: -15%;
		margin-top: 6.4rem;
		margin-bottom: 6.4rem;
		width: 130%;
		height: auto;
		max-height: 60rem;
/*		max-height: 50rem;*/
		overflow: hidden;
		z-index: -1;
	}
	.article-image {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	@media(max-width: 760px) {
		.image-container {
			width: 100%;
			margin-left: 0;
		}
	}
</style>


