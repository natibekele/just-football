<script>
	export let post;


	function formatDate(timestamp) {
	  const date = new Date(timestamp);
	  const months = [
	    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	  ];
	  const month = months[date.getMonth()];
	  const day = date.getDate();
	  const year = date.getFullYear();

	  return `${month} ${day} -- ${year}`;
	}
</script>


{#if !post.empty}
	<a href={`/post/${post.slug?.current}`} class="card">
		<div class="card--link">
			<div class="date-tag">
				<span class="tag">{post.category}</span>
				<span class="separator"> -- </span>
				<span class="date"> {formatDate(post.publishDate)}</span> 
			</div>
			<h2 class="card--title"> {post.title} </h2>
			<p class="card--subtitle"> {post.subtitle} </p>
		</div>
		<div class="card-background">
			<img src={post.imageUrl} alt={"image should have alt text to place here"}/>
			<div class="card-background-overlay"> </div>
		</div>
	</a>
	{:else}
	<div class="card"> </div>

{/if}

<style type="text/css">
	.card {
		box-sizing: border-box;
		border: solid 0px var(--border-gray);
		border-right-width: 1px;
		border-bottom-width: 1px;
		padding: 4rem;
		width: 100%;
		min-height: 48rem;
		position: relative;
		background: transparent;
		font-family: "Heming";
		text-decoration: none;
		color: var(--black);
	}	
	.card--title {
		font-size: 3.6rem;
        font-weight: 600;
	}
	.card--subtitle {
		font-size: 1.5rem;
		font-weight: 200;
		line-height: 130%;
	}
	.card--link {
    	transition: ease-out 0.3s;
		height: 100%;
		width: 100%;
		text-decoration: none;
	}
	.card-background {
		position: absolute;
		height: 0%;
		width: 50%;
		top: 5%;
		left: 20%;
		right: 0;
		bottom: 10%;
		transition: ease-in-out 0.4s;
		z-index: -1;
/*		mix-blend-mode: screen;*/
	}
	.card-background-overlay {
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,0.15);
		position: absolute;
		top: 0;
		left: 0;
	}
	.card-background > img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.card:hover > .card--link {
/*		filter: invert(1);*/
/*      mix-blend-mode: difference;*/
		color: var(--white) !important;
	}
	.card:hover > .card--link > .card--title {
		color: var(--white) !important;
	}
	.card:hover > .card--link > .card--subtitle {
		display: none;
		opacity: 0;
	}
	.card:hover > .card-background {
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.date-tag {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.tag {
		font-size: 1.4rem;
		font-weight: 600;
	}
	.date {
		color: rgba(0,0,0,0.5);
		font-size: 1.4rem
	}
	.separator {
		font-size: 1.4rem;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.card {
			min-height: 40rem;
		}
	}
</style>