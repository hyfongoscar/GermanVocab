<script>
	import { verbs } from '../stores';
	verbs.useLocalStorage();

	let verb = {
		ich: '',
		du: '',
		er: '',
		wir: '',
		ihr: '',
		sie: '',
		translation: '',
		chapter: 0
	};

	function addVerb() {
		if (!verb.ich) {
			alert('Please enter your vocabulary, at least enter the singular ich form. :)');
			return;
		}
		$verbs.push(verb);
		$verbs = $verbs;
		Object.keys(verb).forEach((key) => {
			if (key !== 'chapter') verb[key] = '';
		});
	}
</script>

<div class="flex flex-col justify-self-center w-full">
	<div class="pb-3">
		Chapter <input
			id="chapter"
			class="border border-2 rounded-full px-2 w-16"
			type="number"
			bind:value={verb.chapter}
		/>
	</div>

	<div class="flex space-x-2 pb-2">
		<input
			class="border border-2 rounded-full px-2 w-1/6"
			type="text"
			bind:value={verb.ich}
			placeholder="ich"
		/>
		<input
			class="border border-2 rounded-full px-2 w-1/6"
			type="text"
			bind:value={verb.du}
			placeholder="du"
		/>
		<input
			class="border border-2 rounded-full px-2 w-1/6"
			type="text"
			bind:value={verb.er}
			placeholder="er"
		/>
	</div>

	<div class="flex space-x-2 pb-5">
		<input
			class="border border-2 rounded-full px-2 w-1/6"
			type="text"
			bind:value={verb.wir}
			placeholder="wir"
		/>
		<input
			class="border border-2 rounded-full px-2 w-1/6"
			type="text"
			bind:value={verb.ihr}
			placeholder="ihr"
		/>
		<input
			class="border border-2 rounded-full px-2 w-1/6"
			type="text"
			bind:value={verb.sie}
			placeholder="sie"
		/>
		<input
			class="border border-2 rounded-full px-2 w-1/5"
			type="text"
			bind:value={verb.translation}
			placeholder="English Translation (optional)"
		/>
		<button class="border border-2 rounded-full px-3 w-1/12 bg-slate-200" on:click={addVerb}
			>Add Verb</button
		>
	</div>

	<div>Input 0 for chapter if you are not following a textbook.</div>
</div>
