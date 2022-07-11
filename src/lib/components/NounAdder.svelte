<script>
	import { nouns } from '../stores';
	nouns.useLocalStorage();

	let article = 'der';
	let word = '';
	let plural = '';
	let translation = '';
	let chapter = 0;

	function addVocab() {
		if (!word) {
			alert('Please enter your nounulary, at least enter the normal form. :)');
			return;
		}
		$nouns.push({ article, chapter, plural, translation, word });
		$nouns = $nouns;
		word = '';
		plural = '';
		translation = '';
	}
</script>

<div class="pb-3">
	Chapter <input
		id="chapter"
		class="border border-2 rounded-full px-2 w-16"
		type="number"
		bind:value={chapter}
		placeholder="Chp."
	/>
</div>

<div class="flex space-x-2 pb-5">
	<select class="border border-2 rounded-full px-2 w-1/12" bind:value={article}>
		<option value="der">der</option>
		<option value="das">das</option>
		<option value="die">die</option>
	</select>
	<input
		class="border border-2 rounded-full px-2 w-1/4"
		type="text"
		bind:value={word}
		placeholder="Normal form"
	/>
	<input
		class="border border-2 rounded-full px-2 w-1/4"
		type="text"
		bind:value={plural}
		placeholder="Plural form (optional)"
	/>
	<input
		class="border border-2 rounded-full px-2 w-1/4"
		type="text"
		bind:value={translation}
		placeholder="English Translation (optional)"
	/>
	<button class="border border-2 rounded-full px-3 w-1/6 bg-slate-200" on:click={addVocab}
		>Add Vocabulary</button
	>
</div>

<div>Input 0 for chapter if you are not following a textbook.</div>
