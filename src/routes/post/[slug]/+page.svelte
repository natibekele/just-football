<script>
    import { beforeUpdate } from "svelte"
    import Header from "$lib/Header.svelte"
    import Marquee from "$lib/Marquee.svelte"
    import Footer from "$lib/Footer.svelte"
    import {PortableText} from '@portabletext/svelte'
    import QuoteBlock from "$lib/QuoteBlock.svelte"
    import UnorderedListWrapper from "$lib/UnorderedListWrapper.svelte"
    import PortableImage from "$lib/PortableImage.svelte"
    import SuggestedArticles from "$lib/SuggestedArticles.svelte"
    import SpiralShader from "$lib/SpiralShader.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
    $: ({ post, suggestedPosts } = data);

</script>

<!-- <h1>{data.title}</h1>
<div>{@html data.content}</div> -->
<svelte:head>
    <title>{post.title}</title>
    <meta name="description" content={post.subtitle} />
</svelte:head>
<Header textColor={"var(--header-logo)"}/>
<div class="container">
    {#if post}
        <div class="post-hero">
            <img src={post.imageUrl} class="hero-image" alt={"hero-image"}/>
            <div class="overlay"></div>

            <Marquee text={post.title} textColor={"var(--white)"}/>
        </div>
        <main>
            <article class="article">
                <h1 class="title">{post.title}</h1>
                
                <PortableText 
                value={post.content}
                onMissingComponent={false} 
                components={{
                    types: {
                        image: PortableImage
                    },
                    block: {
                        blockquote: QuoteBlock,
                    },
                    list: {
                        bullet: UnorderedListWrapper
                    },
                }}/>
            </article>
        </main>
    {:else}
        <div class="not-found">
            <h3> Hmmm... We can't find that post for some reason.</h3>
            <p> Either it got moved, or you're in the wrong place. Check out a 
            different post instead. </p>
        </div>
    {/if}
    <!-- other articles section/ so users can continue reading if they want to -->
    <!-- is this just football focused or am i writing about lifestuff as well? just football probably huh... -->
    <SuggestedArticles suggestedPosts={suggestedPosts}/>

    <div class="decoration-section">
        <SpiralShader />
    </div>
</div>


<style>
    .container {
        position: relative;
        border-bottom: solid 1px var(--border-gray);
    }
    .post-hero {
        position: relative;
        height: 100vh;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .hero-image {
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        top:0;
        left:0;
        z-index: -1;
    }
    .overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.05));
        top: 0;
        left: 0;
    }
    .title {
        font-size: 5.4rem;
        font-weight: bold;
        line-height: 130%;
        letter-spacing: -1.6px;
        color: var(--black);
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

    .not-found {
        height: 50rem;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 3.2rem;
    }
    .not-found > h3 {
        font-size: 2.4rem;
    }
    .not-found > p {
        font-size: 1.6rem;
        letter-spacing: 0.6px;
    }
    
    .decoration-section {
        height: 14rem;
        width: 100%;
        border-bottom: solid 1px var(--border-gray);
        position: relative;
/*      overflow: hidden;*/
    }
</style>