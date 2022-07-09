<script>
	import { vocabs } from '../stores';
	vocabs.useLocalStorage();

	let article = '';
	let word = '';
	let plural = '';

	function addVocab() {
		$vocabs.push({ article, word, plural });
		$vocabs = $vocabs;
	}
</script>

<select class="border border-2 rounded-full px-2" bind:value={article}>
	<option value="der">der</option>
	<option value="die">die</option>
	<option value="das">das</option>
</select>
<input class="border border-2 rounded-full px-2" type="text" bind:value={word} />
<input class="border border-2 rounded-full px-2" type="text" bind:value={plural} />
<button class="border border-2 rounded-full px-3 bg-slate-200" on:click={addVocab}
	>Add Vocabulary</button
>
