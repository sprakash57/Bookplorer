<script>
    import { onDestroy } from "svelte";
    import { DEFAULT_COVER } from "../constants";
    import { sidebarContent } from "../stores";

    let bookContent;

    const unsubscribe = sidebarContent.subscribe((value) => {
        fetch(value)
            .then((res) => res.json())
            .then((data) => {
                bookContent = data;
            })
            .catch((error) => console.log(error));
    });

    onDestroy(unsubscribe);
</script>

<main>
    {#if bookContent}
        <section>
            <h1>{bookContent.volumeInfo.title}</h1>
            <summary>{bookContent.volumeInfo.subtitle || ''}</summary>
            <figure>
                <img
                    src={bookContent.volumeInfo.imageLinks.thumbnail || DEFAULT_COVER}
                    alt="poster" />
                <figcaption>{bookContent.volumeInfo.pageCount}</figcaption>
            </figure>
        </section>
        <section>Description</section>
        <section>Author</section>
        <section>Publication</section>
        <button>Share</button>
        <button>Buy</button>
    {:else}
        <div>Loading...</div>
    {/if}
</main>
