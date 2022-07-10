<script>
	import { vocabs } from '$lib/stores';
	vocabs.useLocalStorage();

	export /** @type {any} */ let vocab;
	export let first = false;
	export let changeArticle = false;
	let hover = false;

	function removeVocab() {
		if (typeof vocab !== 'undefined') {
			$vocabs.splice($vocabs.indexOf(vocab), 1);
		}
		$vocabs = $vocabs;
	}
</script>

<tr on:mouseenter={() => (hover = true)} on:mouseleave={() => (hover = false)}>
	{#if first}
		<td class="text-right px-1">{vocab.article}</td>
		<td class="px-1">{vocab.word}</td>
		<td class="px-1">{vocab.plural}</td>
		<td class="px-1">{vocab.translation}</td>
	{:else if changeArticle}
		<td class="text-right px-1 py-1.5 border-t-2 border-black">{vocab.article}</td>
		<td class="px-1 py-1.5 border-t-2 border-black">{vocab.word}</td>
		<td class="px-1 py-1.5 border-t-2 border-black">{vocab.plural}</td>
		<td class="px-1 py-1.5 border-t-2 border-black">{vocab.translation}</td>
	{:else}
		<td class="text-right px-1 py-1.5 border-t-2">{vocab.article}</td>
		<td class="px-1 py-1.5 border-t-2">{vocab.word}</td>
		<td class="px-1 py-1.5 border-t-2">{vocab.plural}</td>
		<td class="px-1 py-1.5 border-t-2">{vocab.translation}</td>
	{/if}
	{#if hover}
		<td class="bg-purple-500 text-cyan-50 flex justify-center border border-1 rounded-full px-3">
			<button on:click={removeVocab}>Delete</button>
		</td>
	{/if}
</tr>
