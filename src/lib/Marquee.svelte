<script type="text/javascript">
	export let text;
	export let textColor = "var(--black)"
</script>

<div class="marquee-container" style={`color: ${textColor}`}>
	<div class="strip">
		<div class="strip-block">
			<h1> {text}</h1>
		</div>
		<div class="strip-block">
			<h1> {text}</h1>
		</div>
		<div class="strip-block">
			<h1> {text} </h1>
		</div>
	</div>
</div>

<style>
	.marquee-container {
		display: inline-block;
		--gap: 2rem;
		pointer-events: none;
	}

	.strip {
/*		width: auto;*/
		display: flex;
		overflow: hidden;
		justify-content: flex-start;
		align-items: center;
	}
	.strip-block {
		font-size: 5.4rem;
		letter-spacing: 0.6rem;
		display: flex;
		align-items: flex-end;
		justify-content: space-around;
		flex: 0 0 auto;
		gap: var(--gap);
		animation: marquee 25s linear infinite;
		min-width: 100%;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}

		100% {
			transform: translateX(-100%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
 	 	.strip-block {
	   	 animation-play-state: paused !important;
	  	}
	}
</style>