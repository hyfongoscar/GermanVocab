<script>
	import { verbs } from '$lib/stores';
	verbs.useLocalStorage();

	export /** @type {any} */ let verb;
	export let first = false;
	let hover = false;

	function removeVerb() {
		if (typeof verb !== 'undefined') {
			$verbs.splice($verbs.indexOf(verb), 1);
		}
		$verbs = $verbs;
	}
</script>

{#each Object.keys(verb) as form, index}
  {#if form === "chapter"}
    <div class="px-1 py-1.5" on:mouseenter={() => (hover = true)} on:mouseleave={() => (hover = false)}>
      {#if hover}
        <button class="bg-purple-500 text-cyan-50 flex justify-center border border-1 rounded-full px-3" on:click={removeVerb}>Delete</button>
      {/if}
    </div>
  {:else if first}
    <div class="px-1 py-1.5" on:mouseenter={() => (hover = true)} on:mouseleave={() => (hover = false)}>
      {verb[form]}
    </div>
  {:else}
    <div class="px-1 py-1.5 border-t-2" on:mouseenter={() => (hover = true)} on:mouseleave={() => (hover = false)}>
      {verb[form]}
      {#if index - 1 === Object.keys(verb).length && hover}
        <button class="bg-purple-500 text-cyan-50 flex justify-center border border-1 rounded-full px-3" on:click={removeVerb}>Delete</button>
      {/if}
    </div>
  {/if}
{/each}
