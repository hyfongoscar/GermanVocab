<script>
	import VocabAdder from '$lib/components/VocabAdder.svelte';
	import VocabRemover from '$lib/components/VocabRemover.svelte';
	import { vocabs, chapters } from '$lib/stores';

	let filtered = [];

	/**
	 * @param {{ article: Object; }} vocab1
	 * @param {{ article: Object; }} vocab2
	 */
	function sortArticle(vocab1, vocab2) {
		if (vocab1.article === 'der' && (vocab2.article === 'das' || vocab2.article === 'die'))
			return -1;
		if (vocab1.article === 'das' && vocab2.article === 'die') return -1;
		if (vocab2.article === 'der' && (vocab1.article === 'das' || vocab1.article === 'die'))
			return 1;
		if (vocab2.article === 'das' && vocab1.article === 'die') return 1;
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
				{#if $vocabs.filter((vocab) => vocab.chapter === index).length > 0}
					<tr>
						<td class="font-semibold" colspan="5"
							>{index === 0 ? 'No Chapter' : `Chapter ${index}: ${title}`}</td
						>
					</tr>
					{#each (filtered = $vocabs
						.filter((vocab) => vocab.chapter === index)
						.sort((vocab1, vocab2) => sortArticle(vocab1, vocab2))) as vocab, vocabIndex}
						<!-- Each vocab object here is a shallow copy, i.e. a reference to the $vocabs array. The reference is later used for vocab removal -->
						<VocabRemover
							{vocab}
							changeArticle={vocabIndex > 0 &&
								sortArticle(filtered[vocabIndex - 1], filtered[vocabIndex]) < 0}
							first={vocabIndex === 0}
						/>
					{/each}
				{/if}
			{/each}
		</tbody>
	</table>

	<!-- TODO: move enter tbody to vocabremove -->

	<br /><br />

	<VocabAdder />
</div>
