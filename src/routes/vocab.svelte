<script>
	import VocabAdder from '$lib/components/VocabAdder.svelte';
	import VocabRemover from '$lib/components/VocabRemover.svelte';
	import { vocabs } from '$lib/stores';
</script>

<main>
	<table class="border-collapse table-fixed text-base font-serif w-full">
		<thead class="text-white">
			<tr>
				<td class="border border-slate-600 w-1/6 bg-slate-400">Article</td>
				<td class="border border-slate-600 w-1/3 bg-slate-400">Word</td>
				<td class="border border-slate-600 w-1/3 bg-slate-400">Plural</td>
				<td class="w-1/6" />
			</tr>
		</thead>
		<tbody>
			{#each $vocabs as _, index}
				<VocabRemover {index} />
			{/each}
		</tbody>
	</table>

	<br /><br />

	<VocabAdder />
</main>
