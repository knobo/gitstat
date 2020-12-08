<script>
  export let data;
  const next = () => currentPage++;
  const prev = () => currentPage--;
  let pagedData = [];
  $: pagedData = data?.slice(
    currentPage * length,
    currentPage * length + length
  );

  let length = 20;
  let currentPage = 0;
  let pages = data.length / length;
</script>


<div class="pager">
  <button
    disabled={currentPage === 0}
             on:click={prev}
    title="Previous page"
    class="page"
  >⬅</button>
  {#each Array.from({ length: pages }) as page, index}
    <button
      class:active={currentPage === index}
      on:click={() => (currentPage = index)}
      class="page"
    >{index}</button>
  {/each}
  <button
    disabled={currentPage === pages - 1}
    on:click={next}
    title="Next page"
    class="page"
  >➡</button>
</div>

<slot data={pagedData} />

<style>
  .pager {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .page {
    flex: 1 0 auto;
    border: 1px solid black;
    text-shadow: rgba(0, 0, 0, 0.1) 2px 2px;    
    cursor: pointer;
    transition: flex-grow .25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .page.active {
    background: gray;
  }
  .page:hover {
    flex-grow: 1.3;
    position: relative;
    transition: flex-grow .25s cubic-bezier(0.215, 0.61, 0.355, 1);;
  }
</style>
