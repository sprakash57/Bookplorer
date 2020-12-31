<script>
    import { onDestroy } from "svelte";
    import { DEFAULT_COVER, tweetBuilder } from "../constants";
    import { sidebarContent } from "../stores";
    import Badge from "./Badge.svelte";
    import Button from "./Button.svelte";

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

<style lang="scss">
    .container {
        h1 {
            text-align: center;
            font-size: 2rem;
            margin: auto 0;
        }
        summary {
            text-align: center;
            margin-bottom: 8px;
        }
        .image {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            .pages {
                text-align: center;
                h1 {
                    font-size: 2.5rem;
                    margin-bottom: auto;
                }
            }
        }
    }
    .section-header {
        header {
            padding: 5px;
            background: tomato;
            color: white;
        }
        p {
            text-align: justify;
        }
    }
    .twitter-share-button {
        background: blue;
        color: white;
    }
</style>

<main>
    {#if bookContent}
        <section class="container">
            <h1>{bookContent.volumeInfo.title}</h1>
            <summary>{bookContent.volumeInfo.subtitle || ''}</summary>
            <Badge
                categories={bookContent.volumeInfo.categories}
                date={bookContent.volumeInfo.publishedDate} />
            <article class="image">
                <figure>
                    <img
                        src={bookContent.volumeInfo.imageLinks?.thumbnail || DEFAULT_COVER}
                        alt="poster" />
                </figure>
                <div class="pages">
                    <h1>{bookContent.volumeInfo.pageCount}</h1>
                    <small>Pages</small>
                </div>
            </article>
        </section>
        <section class="section-header">
            <header>Author</header>
            <p>
                {bookContent.volumeInfo.authors ? bookContent.volumeInfo.authors.join(', ') : ''}
            </p>
        </section>
        <section class="section-header">
            <header>Publication</header>
            <p>Publisher: {bookContent.volumeInfo.publisher || ''}</p>
            <p>Language: {bookContent.volumeInfo.language || ''}</p>
        </section>
        <section class="section-header">
            <header>Description</header>
            {#if bookContent.volumeInfo.description}
                <p>
                    {@html bookContent.volumeInfo.description}
                </p>
            {/if}
        </section>
        <a
            target="__blank"
            class="twitter-share-button"
            href={tweetBuilder(bookContent.volumeInfo.title)}
            data-size="large">
            Tweet</a>
        <Button />
    {:else}
        <div>Loading...</div>
    {/if}
</main>
