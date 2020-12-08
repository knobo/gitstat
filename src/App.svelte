<script>
  import { gitStatData } from './gitStatData.js';
  import Pager from './components/Pager.svelte';
  import Table from './components/ResponsiveTable.svelte';

  let columns = {
    name: {title: 'Name'},
    description: {title: 'Description'},
    homepage: {title: 'Homepage', type: "url"},
    clone_url: {title: 'Clone Url', type: "url"},
  };
</script>

<div class="page">
  <h1>GitStat - Statistics from git</h1>
  {#if $gitStatData}
    <Pager data={$gitStatData} let:data>
      <Table {data} {columns} />
    </Pager>
  {:else}
    loading...
  {/if}
</div>

<style>
  .page {
    max-width: 800px;
    margin: auto;
  }

</style>
