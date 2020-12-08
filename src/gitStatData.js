import { writable, derived } from 'svelte/store';

export const gitStatData = (() => {
  const { subscribe, set, update } = writable(null);

  const url =
    'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100';

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw 'Could not load statistics from github';
      }
    })
    .then((json) => {
      set(json.items);
    });

  return {
    subscribe,
  };
})();
