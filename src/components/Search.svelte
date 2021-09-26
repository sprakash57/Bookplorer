<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: var(--primary);
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: 100;
    font-family: cursive;
    margin: 0 auto 16px auto;
    width: fit-content;
    border-bottom: 1px solid;
    padding: 0 16px 0 16px;
  }

  summary {
    color: var(--secondary);
    margin: 16px;
    font-family: cursive;
    font-size: 1rem;
  }

  input[type='search'] {
    box-shadow: inset 3px 3px 4px #c2c2c2, 4px 4px 4px #f2f2f2;
    border-radius: var(--rad-20);
    border: none;
    width: 70%;
    padding: 0.8rem;
    outline: none;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  .feedback {
    color: tomato;
    display: block;
  }
</style>

<script>
  import { HTTP_STATUS, URL } from '../constants';
  import { results, pagination, loader } from '../stores';

  let emptySearch = false;

  function onSubmit(e) {
    e.preventDefault();
    if (e.target.book.value) {
      loader.update(() => HTTP_STATUS.LOADING);
      emptySearch = false;
      fetch(`${URL}${e.target.book.value}&maxResults=12`)
        .then(data => data.json())
        .then(response => {
          results.update(() => response);
          loader.update(() => HTTP_STATUS.SUCCESS);
        })
        .catch(error => {
          console.error(error.message);
          loader.update(() => HTTP_STATUS.FAILED);
        });
      pagination.update(value => ({
        ...value,
        searchedTerm: e.target.book.value
      }));
    } else {
      emptySearch = true;
    }
  }
</script>

<main>
  <h1>Bookplorer</h1>
  <summary>Thousands of Books. Explore them, Find them.</summary>
  <section>
    <form on:submit={onSubmit}>
      <input type="search" name="book" placeholder="Search by title or Author" />
      {#if emptySearch}
        <small class="feedback">*It seems you haven't provided any Book name.</small>
      {/if}
    </form>
  </section>
</main>
