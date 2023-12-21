<script>
	import { beforeUpdate, onMount } from "svelte"
	import PostSummary from "$lib/PostSummary.svelte"
	import Header from "$lib/Header.svelte"
	import Marquee from "$lib/Marquee.svelte"
	import DecorationShader from "$lib/DecorationShader.svelte"

	export let data;
	let myPosts = data.posts
	let notLatest = myPosts.slice(2);
	// let myPosts = [{ title: 'some title', subtitle: 'my subtite', publishDate: Date.now(), category: 'Tech', imageUrl: './textures/b&w.jpg'},
	// 	{ title: 'some title', subtitle: 'my subtite', publishDate: Date.now(), category: 'Tech', imageUrl: './textures/b&w.jpg'},
	// 	{ title: 'some title', subtitle: 'my subtite', publishDate: Date.now(), category: 'Tech', imageUrl: './textures/b&w.jpg'},
	// 	{ title: 'some title', subtitle: 'my subtite', publishDate: Date.now(), category: 'Tech', imageUrl: './textures/b&w.jpg'},
	// 	{ title: 'some title', subtitle: 'my subtite', publishDate: Date.now(), category: 'Tech', imageUrl: './textures/b&w.jpg'},
	// 	{ title: 'some title', subtitle: 'my subtite', publishDate: Date.now(), category: 'Tech', imageUrl: './textures/b&w.jpg'}]
    function addEmptyBlocks(){
    	let paddedPosts = [...notLatest];
        const rm = 4 - (notLatest.length % 4);
        for(var x=0; x<rm; x++) {
        	paddedPosts.push({ empty: true })
        }
        notLatest = paddedPosts
    }

    onMount(_ => {
    	if (document.body && document.body.clientWidth < 768) return;
    	addEmptyBlocks();
    })
</script>

<svelte:head>
    <title>Just--Football</title>
    <meta name="description" content="A space for coaches, players and fans to learn about the game, push their understandign and enjoy what the world's game has to offer." />
</svelte:head>
<Header />
<div>
	<div class="hero-section">
		<Marquee text={"JUST FOOTBALL -- NO FILLER -- "}/>
	</div>

	<div class="latest-grid">
		<PostSummary post={myPosts[0]} />
		<PostSummary post={myPosts[1]} />
	</div>
	<div class="main-grid">
		{#each notLatest as post}
			<PostSummary post={post}/>
		{/each}
	</div>

	<div class="decoration-section">
		<DecorationShader />
	</div>

</div>

<style>
	.hero-section {
		width: 100%;
		height: 50vh;
		min-height: 54rem;
		border: solid var(--border-gray) 0px;
		border-bottom-width: 1px;
		display: flex;
		align-items: flex-end;
		background: var(--white);
		--gap: 1rem;
		z-index: -1;
	}

	.latest-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: auto;
		min-height: 59rem;
	}

	.main-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: auto;
	}

	p {
		font-size: 2.2rem;
		padding: 2.4rem;
	}

	.decoration-section {
		height: 14rem;
		width: 100%;
		border-bottom: solid 1px var(--border-gray);
		position: relative;
/*		overflow: hidden;*/
	}

	@media(max-width: 800px) {
		.latest-grid {
			grid-template-columns: 1fr;
		}
		.main-grid {
			grid-template-columns: 1fr;
		}
	}
</style>