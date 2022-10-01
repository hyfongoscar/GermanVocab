<script>
	import VerbAdder from '$lib/components/VerbAdder.svelte';
	import VerbRemover from '$lib/components/VerbRemover.svelte';
	import { verbs, chapters } from '$lib/stores';
</script>

<div class="grid w-5/6 font-serif">
	<div class="grid grid-cols-8">
    <div class="pl-1 text-white border border-slate-600 bg-slate-400">ich</div>
    <div class="pl-1 text-white border border-slate-600 bg-slate-400">du</div>
    <div class="pl-1 text-white border border-slate-600 bg-slate-400">er</div>
    <div class="pl-1 text-white border border-slate-600 bg-slate-400">wir</div>
    <div class="pl-1 text-white border border-slate-600 bg-slate-400">ihr</div>
    <div class="pl-1 text-white border border-slate-600 bg-slate-400">sie/Sie</div>
    <div class="pl-1 text-white border border-slate-600 bg-slate-400">English</div>
    <div></div>

    {#each $chapters as title, index}
      {#if $verbs.filter((verb) => verb.chapter === index).length > 0}
        <div class="font-semibold col-span-8">{index === 0 ? 'No Chapter' : `Chapter ${index}: ${title}`}</div>
        {#each $verbs.filter((verb) => verb.chapter === index) as verb, vocabIndex}
          <!-- Each vocab object here is a shallow copy, i.e. a reference to the $vocabs array. The reference is later used for vocab removal -->
          <VerbRemover
            {verb}
            first={vocabIndex === 0}
          />
        {/each}
      {/if}
    {/each}
  </div>

	<br /><br />

	<VerbAdder />
</div>
