<script>
  import { vocabs } from '../lib/stores'
  vocabs.useLocalStorage();

  let article = '';
  let word = '';
  let plural = '';

  function addVocab() {
    $vocabs.push({article, word, plural})
    $vocabs = $vocabs;
  }
</script>

<main>
  <table>
    <tr>
      <td>Article</td>
      <td>Word</td>
      <td>Plural</td>
    </tr>
    {#each $vocabs as vocab}
      <tr>
        <td>{vocab.article}</td>
        <td>{vocab.word}</td>
        <td>{vocab.plural}</td>
      </tr>
    {/each}

  </table>

  <select bind:value={article}>
    <option value="der">der</option>
    <option value="die">die</option>
    <option value="das">das</option>
  </select>
  <input type="text" bind:value={word}>
  <input type="text" bind:value={plural}>
  <button on:click={addVocab}>Add Vocabulary</button>
</main>