<script>
    import { onDestroy } from "svelte";
    import { results } from "../stores";
    import Book from "./Book.svelte";

    let books = [];
    let unsubscribe = results.subscribe((value) => {
        books = value.items;
    });
    onDestroy(unsubscribe);
</script>

<style lang="scss">
    .container {
        padding: 2rem;
        > ul {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: 1rem;
        }
    }
</style>

<main class="container">
    <ul>
        {#if books.length}
            {#each books as book}
                <Book
                    title={book.volumeInfo.title}
                    image={book.volumeInfo.imageLinks?.smallThumbnail || 'https://via.placeholder.com/128x192.png?text=No+cover'} />
            {/each}
        {:else}
            <div>Loading...</div>
        {/if}
    </ul>
</main>
