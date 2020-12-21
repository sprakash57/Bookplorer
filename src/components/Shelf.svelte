<script>
    import { onDestroy } from "svelte";
    import { get } from "svelte/store";
    import { DEFAULT_COVER } from "../constants";
    import { pagination, results } from "../stores";
    import { fetchBooks } from "../utils";
    import Book from "./Book.svelte";

    let books = [],
        showMore = true,
        fetching;
    let unsubscribe = results.subscribe((value) => {
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
            pagination.update((value) => ({ ...value, count }));
        } else {
            throw new Error(data);
        }
    }

    function handleShowMore() {
        fetching = fetchMore();
    }
</script>

<style lang="scss">
    .container ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }
    .show-more {
        border: none;
        background: none;
        font-size: 1.2rem;
        margin: 10px auto;
        display: flex;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
</style>

<main class="container">
    <ul>
        {#if books.length}
            {#each books as book}
                <Book
                    title={book.volumeInfo.title}
                    image={book.volumeInfo.imageLinks?.smallThumbnail || DEFAULT_COVER}
                    author={book.volumeInfo?.authors}
                    category={book.volumeInfo?.categories}
                    selfLink={book.selfLink} />
            {/each}
        {/if}
    </ul>
    <section>
        {#await fetching}
            <div>Loading...</div>
        {:then}
            {#if showMore}
                <button on:click={handleShowMore} class="show-more">Show More</button>
            {/if}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </section>
</main>
