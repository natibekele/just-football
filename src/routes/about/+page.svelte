<script>
	import Header from "$lib/Header.svelte"
	import Marquee from "$lib/Marquee.svelte"
</script>

<Header />


<div class="post-hero">
	<img src="http://tinyurl.com/468ccc4c" class="hero-image" alt={"hero-image"}/>
	<div class="overlay"></div>

	<Marquee text={"About"} textColor={"var(--white)"}/>
</div>

<article class="article">
	<p>
		At Just--Football, the aim is to foster continuous learning and enhance football analysis and coaching 	skills. This platform has been established as a central hub for all this football-related work.
	</p>

	<p>
		Each week, the site features articles focused on various coaching topics, including game analysis, modern football trends, session planning, exercises, management insights, and data analysis or visualizations.
	</p>

	<p>
		The motivation behind Just--Football is multifaceted. Primarily, it aspires to be a learning sanctuary for aspiring coaches, football enthusiasts, and players seeking to deepen their understanding and enjoyment of the sport. The commitment to produce substantial content is an endeavor to personally grow and appreciate the intricacies of the game.
	</p>

	<p>
		This platform strives to build a community where we grow together, fostering relationships that benefit everyone involved. Here, youth coaching resources are offered freely – an essential gesture because coaching isn't just about us; it's about the holistic development of players. By aiding coaches in their roles, we ultimately cultivate not only better players but better individuals.
	</p>

	<p>
		Join us in this space, where football enthusiasts can find valuable resources and be part of an evolving journey in football development.
	</p>
</article>

<style>
	.post-hero {
        position: relative;
        height: 100vh;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-top: 6rem;
    }
    .hero-image {
        height: calc(100% - 6rem);
        width: 100%;
        object-fit: contain;
        position: absolute;
        top:0;
        left:0;
        z-index: -1;
    }
   .article {
        font-size: 1.6rem;
        line-height: 150%;
        letter-spacing: 0px;
        width: 100%;
        box-sizing: border-box;
        padding: 2.4rem 3.6rem;
        max-width: 76rem;
        margin: auto;
        color: var(--text-color);
        border-bottom: solid 1px var(--border-gray);
    }
</style>