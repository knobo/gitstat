import App from './App.svelte';
import { mount } from 'cypress-svelte-unit-test';

it('shows greeting', () => {
  mount(App, {
    props: {},
  });
  cy.contains('h1', 'GitStat');
});
