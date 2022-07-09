<script>
	import { vocabs } from '$lib/stores';
	vocabs.useLocalStorage();

	export /** @type {number} */ let index;
	let hover = false;

	function removeVocab() {
		if (typeof index !== 'undefined') $vocabs.splice(index, 1);
		$vocabs = $vocabs;
	}
</script>

<tr on:click={() => (hover = !hover)}>
	<td>{$vocabs[index].article}</td>
	<td>{$vocabs[index].word}</td>
	<td>{$vocabs[index].plural}</td>
	<td>
		{#if hover}
			<button on:click={removeVocab}>Delete</button>
		{/if}
	</td>
</tr>
