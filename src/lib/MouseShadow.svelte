<script>
	import {onMount} from "svelte"
	import anime from "animejs"
	let myShadow;
	onMount(_ => {
		document.addEventListener('mousemove',updateShadowPosition)
	})

	function updateShadowPosition(e) {
		let x = e.clientX - 14
		let y = e.clientY - 14

		anime({
			targets: myShadow,
			translateX: `${x}`,
			translateY: `${y}`,
			easing: 'easeOutSine',
			duration: 100
		});
	}
</script>

<div class="shadow" bind:this={myShadow}></div>

<style type="text/css">
	.shadow {
		position: fixed;
		top: 0;
		left: 0;
		height: 28px;
		width: 28px;
		border-radius: 50%;
		background: var(--accent);
		z-index: 0;
		opacity: 0.8;
/*		transition: ease-out 0.2s;*/
	}

	@media(max-width: 760px) {
		.shadow {
			display: none;
		}
	}
</style>