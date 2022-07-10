<script>
	import Header from '../lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main
	class="flex flex-col items-center w-4/5 box-border
							p-4 mx-auto my-0"
>
	<slot />
</main>

<footer>
	<p>
		Visit <a href="https://potatohy.github.com">potatohy.github.com</a> for more awesome personal projects.
	</p>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
