<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/nouns'}>
				<a sveltekit:prefetch href="/nouns">Nouns with articles</a>
			</li>
			<li class:active={$page.url.pathname === '/verbs'}>
				<a sveltekit:prefetch href="/verbs">Verb forms</a>
			</li>
			<li class:active={$page.url.pathname === '/vocabs'}>
				<a sveltekit:prefetch href="/vocabs">Other Vocabularies</a>
			</li>
			<li class:active={$page.url.pathname === '/grammar'}>
				<a sveltekit:prefetch href="/grammar">Grammar Express</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://potatohy.github.com">GitHub</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: rgb(0, 90, 80);
		text-decoration: none;
		font-family: 'Trebuchet MS';
		font-weight: bold;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgb(199, 195, 195);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
