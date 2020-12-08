<script>
  export let columns;
  export let data = [];
</script>

<div class="table">
  <div class="row header">
    {#each Object.values(columns) as {title}}
      <div class="col">{title}</div>
    {/each}
  </div>
  {#each data as item}
    <div class="row body">
      {#each Object.entries(columns) as [key, {title, type}]}
        <div class="col">
          <div class="inline-header">{title}</div>
          {#if type === "url"}
            <a href={item[key]} title={item[key]}>{item[key]}</a>
          {:else}
            <span title={item[key]}>{item[key]}</span>            
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  
  .table {
  }

  .header {
    font-weight: bold;
  }

  .row.body:hover .col {
    height: 7rem;
    min-height: fit-content;
    white-space: normal;
    transition: height .25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .row {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0.2rem;
    width: 100%;
    border-bottom: 3px solid black;
  }

  .row .inline-header {
    display: none;
  }

  .col {
    flex: 1 1 0px;
    overflow: hidden;
    padding: 1rem;
    height: 3.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: height .25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
   
  @media all and (max-width: 500px) {
    .row.header {
      display: none;
    }

    .row .inline-header {
      display: block;
      font-size: 9px;
    }
    .row {
      display: block;
      margin-bottom: 1.2em;
    }
    .col {
      max-width: 100%;
      margin-bottom: 5px;
      overflow: hidden;
    }
  }
</style>
