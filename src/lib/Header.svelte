<script type="text/javascript">
	import anime from "animejs"
	export let textColor = "var(--black)";
	let hamburgerOpen = false
	let hamburgerRef;
	let mobileMenuRef;

	function handleHamburgerClick() {
		if (hamburgerOpen) {
			hamburgerRef.classList.remove('open')
			anime({
				targets: mobileMenuRef,
				translateX: 0,
				easing: 'easeInOutSine',
				duration: 100
			});
		} else {
			hamburgerRef.classList.add('open')
			anime({
				targets: mobileMenuRef,
				translateX: `-100%`,
				easing: 'easeInOutSine',
				duration: 100
			});
		}

		hamburgerOpen = !hamburgerOpen
	}

</script>

<header class="header">
	<a class="image-container" href="/">
		<!-- <img class="logo" src="https://assets.website-files.com/63bc8b037c1f9ecfc030ecc3/63bf46d8ecb87169cd643750_Logo.svg" /> -->
		<span class="logo" style={`color: ${textColor}`}> JUST -- FOOTBALL</span>
	</a>

	<div class="links links--navigation">
		<a href="/" class="links--link" style={`color: ${textColor}`}> Home 
			<span class="block" style={`background: ${textColor}`}></span>
		</a>
		<a class="links--link" style={`color: ${textColor}`}> About
			<span class="block" style={`background: ${textColor}`}></span>
		</a>
	</div>

	<div class="links links--socials" >
		<a class="links--link" style={`color: ${textColor}`} href="https://instagram.com/natiboi_"> Instagram 
			<span class="block" style={`background: ${textColor}`}></span>
		</a>
		<a class="links--link" style={`color: ${textColor}`} href="https://www.linkedin.com/in/nathan-shanko-5330b4a8/"> LinkedIn
			<span class="block" style={`background: ${textColor}`}></span>
		</a>
		<a class="links--link" style={`color: ${textColor}`} href="mailto:natibekele@gmail.com"> Email
			<span class="block" style={`background: ${textColor}`}></span>
		</a>
	</div>
 	
 	<!-- MOBILE MENU START  -->
	<div class="hamburger" on:click={handleHamburgerClick} bind:this={hamburgerRef}>
		<div class="hamburger--row1"></div>
		<div class="hamburger--row2"></div>
		<div class="hamburger--row3"></div>
	</div>

	<div class="mobile-menu" bind:this={mobileMenuRef} on:click={handleHamburgerClick}>
		<a href="/" class="mobile--link"> Home</a>
		<a class="mobile--link"> About</a>
		<a class="mobile--link" href="https://instagram.com/natiboi_"> Instagram </a>
		<a class="mobile--link" href="https://www.linkedin.com/in/nathan-shanko-5330b4a8/"> LinkedIn </a>
	</div> 
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 2.8rem 3.2rem;
		background: transparent;
		position: absolute;
		top: 0;
		left: 0;
		box-sizing: border-box;
		z-index: 9;
	}

	.image-container {
		flex: 1;
		text-decoration: none;
	}

	.logo {
		text-decoration: none;
		font-size: 2.6rem;
		font-weight: bold;
		display: block;
	}

	.links--navigation {
		flex: 1;
	}

	.links--socials {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		flex: 1;
	}
	.links--link {
		display: inline-block;
		overflow: hidden;
		padding: 0.4rem 0.8rem;
		font-size: 1.5rem;
		font-weight: bold;
		text-decoration: none;
/*		color: var(--black);*/
		transition: ease-out 0.2s;
		cursor: pointer;
	}
	.links--link:hover > .block {
		transform: translateY(-200%);
	}
	.block {
		position: absolute;
		height: 100%;
		width: 100%;
/*		background: var(--black);*/
		left: 0;
		bottom: -100%;
		transition: ease-out 0.3s;
	}

	.hamburger {
		display: block;
		flex-direction: column;
		height: 4rem;
		width: 4rem;
	}
	.hamburger--row1,.hamburger--row2,.hamburger--row3 {
		height: 4px;
		width: 100%;
		background: var(--black);
		margin-bottom: 1rem;
		transition: ease-in 0.3s;
	}

	.hamburger.open {
		background: green;
	}
	.mobile-menu, .hamburger {
		display: none;
	}
	.mobile-menu {
		position: absolute;
		top: 100%;
		left: 100%;
		height: 100vh;
		width: 100vw;
		padding: 4.2rem 3.4rem;
		background: var(--white);
		transition: ease-in 0.3s;
	}
	.mobile--link {
		color: var(--black);
		text-decoration: none;
		display: block;
		padding: 2.2rem 0;
		font-size: 5.6rem;
		font-weight: 500;
	}
/*	.hamburger.open > .hamburger--row1 {

	}*/
	@media(max-width: 800px) {
		.header {
			background: var(--white);
		}
		.mobile-menu, .hamburger {
			display: block;
		}
	}
	@media(max-width: 768px) {
		.links {
			display: none;
		}
	}

</style>