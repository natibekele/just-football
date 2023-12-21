<script>
</script>

<footer class="footer">
	<div class="footer-logo">
		<h3> THIS IS A FOOTER </h3>
	</div>

	<div class="footer--additional-links">
		<h3><a target="_blank" href="https://aberash.xyz">ABERASH © </a></h3>
	</div>
</footer>



<style type="text/css">
	.footer {
		width: 100%;
		display: grid;
		min-height: 17rem;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-columns: 1fr;
		grid-column-gap: 0;
		grid-row-gap: 0;
		grid-template-rows: auto;
/*		border-top: solid 1px lightgray;*/
	}

	.footer-logo {
		display: flex;
		align-items: flex-end;
		height: 100%;
		border-right: solid 1px lightgray;
		padding: 1.6rem 3.2rem;
	}
	.footer--additional-links {
		display: flex;
		align-items: flex-end;
		padding: 1.6rem 2.4rem;
		height: 100%;
	}

	h3 {
		font-size: 1.8rem;
	}
	h3 > a {
		text-decoration: none;
		color: var(--black);
	}
</style>