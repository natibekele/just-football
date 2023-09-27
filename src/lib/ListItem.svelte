<script>
	export let portableText;

	console.log(portableText);
</script>

{#if portableText.value}
<ul class="unordered-list-item"> {portableText.value} </ul>
{/if}

<style type="text/css">
	.unordered-list-item {

	}
</style>


