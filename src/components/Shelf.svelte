<style lang="scss">
  .container ul {
    overflow-x: auto;
    height: 55vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  .show-more {
    display: flex;
    justify-content: center;
  }
</style>

<script>
  import { onDestroy } from 'svelte';
  import { get } from 'svelte/store';
  import { DEFAULT_COVER, HTTP_STATUS } from '../constants';
  import { pagination, results, loader } from '../stores';
  import { fetchBooks } from '../utils';
  import Alert from './Alert.svelte';
  import Book from './Book.svelte';
  import Button from './Button.svelte';
  import Spinner from './Spinner.svelte';

  let books = [],
    showMore = true,
    fetching;
  let unsubscribe = results.subscribe(value => {
    showMore = !!value.items.length;
    books = value.items;
  });
  onDestroy(unsubscribe);

  async function fetchMore() {
    let { searchedTerm, count } = get(pagination);
    count += 12;
    const res = await fetchBooks(searchedTerm, count);
    const data = await res.json();
    if (res.ok) {
      results.update(() => data);
      pagination.update(value => ({ ...value, count }));
    } else {
      throw new Error(data);
    }
  }

  function handleShowMore() {
    fetching = fetchMore();
  }
</script>

<main class="container">
  <ul>
    {#if books.length}
      {#each books as book}
        <Book
          title={book.volumeInfo.title}
          image={book.volumeInfo.imageLinks?.smallThumbnail || DEFAULT_COVER}
          author={book.volumeInfo?.authors}
          category={book.volumeInfo?.categories}
          selfLink={book.selfLink}
        />
      {/each}
    {:else if $loader === HTTP_STATUS.FAILED}
      <Alert />
    {:else if $loader === HTTP_STATUS.LOADING}
      <Spinner size="big" center />
    {/if}
  </ul>
  <section class="show-more">
    {#await fetching}
      <Spinner size="small" />
    {:then}
      {#if showMore}
        <Button on:message={handleShowMore} title="Even more books">Show more</Button>
      {/if}
    {:catch}
      <Alert />
    {/await}
  </section>
</main>
