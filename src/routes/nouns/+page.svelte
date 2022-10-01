<script>
	import NounAdder from '$lib/components/NounAdder.svelte';
	import NounRemover from '$lib/components/NounRemover.svelte';
	import { nouns, chapters } from '$lib/stores';

	nouns.useLocalStorage()
	

	let filtered = [];

	/**
	 * @param {{ article: Object; }} noun1
	 * @param {{ article: Object; }} noun2
	 */
	function sortArticle(noun1, noun2) {
		if (noun1.article === 'der' && (noun2.article === 'das' || noun2.article === 'die'))
			return -1;
		if (noun1.article === 'das' && noun2.article === 'die') return -1;
		if (noun2.article === 'der' && (noun1.article === 'das' || noun1.article === 'die'))
			return 1;
		if (noun2.article === 'das' && noun1.article === 'die') return 1;
		return 0;
	}
</script>

<div class="grid w-2/3">
	<table
		class="table-fixed border-separate border-spacing-x-1
									text-base font-serif"
	>
		<thead class="text-white">
			<tr>
				<td class="text-right px-1 border border-slate-600 w-1/6 bg-slate-400">Article</td>
				<td class="px-1 border border-slate-600 w-1/4 bg-slate-400">Word</td>
				<td class="px-1 border border-slate-600 w-1/4 bg-slate-400">Plural</td>
				<td class="px-1 border border-slate-600 w-1/4 bg-slate-400">English</td>
				<td class="w-1/12" />
			</tr>
		</thead>
		<tbody>
			{#each $chapters as title, index}
				{#if $nouns && $nouns.filter((noun) => noun.chapter === index).length > 0}
					<tr>
						<td class="font-semibold" colspan="5"
							>{index === 0 ? 'No Chapter' : `Chapter ${index}: ${title}`}</td
						>
					</tr>
					{#each (filtered = $nouns
						.filter((noun) => noun.chapter === index)
						.sort((noun1, noun2) => sortArticle(noun1, noun2))) as noun, nounIndex}
						<!-- Each noun object here is a shallow copy, i.e. a reference to the $nouns array. The reference is later used for noun removal -->
						<NounRemover
							{noun}
							changeArticle={nounIndex > 0 &&
								sortArticle(filtered[nounIndex - 1], filtered[nounIndex]) < 0}
							first={nounIndex === 0}
						/>
					{/each}
				{/if}
			{/each}
		</tbody>
	</table>

	<!-- TODO: move enter tbody to nounremove -->

	<br /><br />

	<NounAdder />
</div>
