<script type="text/javascript">
	import "./global.css"
	import "./satoshi.css"
	import Header from "$lib/Header.svelte"
	import MouseShadow from "$lib/MouseShadow.svelte"
	import Footer from "$lib/Footer.svelte"
</script>

<MouseShadow />
<slot />
<Footer />