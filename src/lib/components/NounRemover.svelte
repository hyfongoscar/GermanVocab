<script>
	import { nouns } from '$lib/stores';
	nouns.useLocalStorage();

	export /** @type {any} */ let noun;
	export let first = false;
	export let changeArticle = false;
	let hover = false;

	function removeVocab() {
		if (typeof noun !== 'undefined') {
			$nouns.splice($nouns.indexOf(noun), 1);
		}
		$nouns = $nouns;
	}
</script>

<tr on:mouseenter={() => (hover = true)} on:mouseleave={() => (hover = false)}>
	{#if first}
		<td class="text-right px-1">{noun.article}</td>
		<td class="px-1">{noun.word}</td>
		<td class="px-1">{noun.plural}</td>
		<td class="px-1">{noun.translation}</td>
	{:else if changeArticle}
		<td class="text-right px-1 py-1.5 border-t-2 border-black">{noun.article}</td>
		<td class="px-1 py-1.5 border-t-2 border-black">{noun.word}</td>
		<td class="px-1 py-1.5 border-t-2 border-black">{noun.plural}</td>
		<td class="px-1 py-1.5 border-t-2 border-black">{noun.translation}</td>
	{:else}
		<td class="text-right px-1 py-1.5 border-t-2">{noun.article}</td>
		<td class="px-1 py-1.5 border-t-2">{noun.word}</td>
		<td class="px-1 py-1.5 border-t-2">{noun.plural}</td>
		<td class="px-1 py-1.5 border-t-2">{noun.translation}</td>
	{/if}
	{#if hover}
		<td class="bg-purple-500 text-cyan-50 flex justify-center border border-1 rounded-full px-3">
			<button on:click={removeVocab}>Delete</button>
		</td>
	{/if}
</tr>
