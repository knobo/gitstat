<script>
const nr = 10
const url = `https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10`
const response = fetch(url).then((response) => {
  if (response.ok) {
    return response.json()
  } else {
    throw 'Could not load statistics from github'
  }
})

let columns = {
  name: 'Name',
  forks: 'Forks',
  homepage: 'Homepage',
  clone_url: 'Clone Ulr',
}
</script>

<h1>GitStat</h1>
{#await response}
  loading..
{:then response}
  <div class="table">
    <div class="row header">
      <div>Name</div>
      <div>Forks</div>
      <div>Homepage</div>
      <div>Clone url</div>
    </div>
    {#each response.items as item}
      <div class="row">
        {#each Object.keys(columns) as col}
          <div class="col">{item[col]}</div>
        {/each}
      </div>
    {/each}
  </div>
{:catch error}
  {error}
{/await}

<style>
* {
  box-sizing: border-box;
}
.header {
  font-weight: bold;
}
.col {
  border: 3px solid black;
  flex: 1 1 0px;
  overflow: hidden;
  padding: 1rem;
}
.row {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: none;
  flex: 1 1 0px;
  padding: 0.2rem;
}

@media all and (max-width: 500px) {
  .table {
  }
  .row {
    display: block;
    margin-bottom: 1em;
  }
  .col {
    max-width: 100%;
    margin-bottom: 5px;
    overflow: hidden;
  }
}
</style>
