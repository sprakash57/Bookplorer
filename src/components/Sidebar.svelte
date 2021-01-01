<script>
    import { onDestroy } from "svelte";
    import Icon from "svelte-awesome";
    import { twitter, shoppingCart } from "svelte-awesome/icons";
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
        > h1 {
            text-align: center;
            font-size: 2rem;
            margin: auto 0;
            color: var(--primary);
        }
        summary {
            text-align: center;
            margin-bottom: 8px;
            font-weight: 600;
        }
        .image {
            display: flex;
            justify-content: space-evenly;
        }
    }
    .image-desc {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        h1 {
            font-size: 2.5rem;
            margin: 0;
            color: var(--primary);
        }
        > div {
            text-align: center;
        }
    }
    .section-header {
        header {
            box-shadow: 3px 3px 4px #c2c2c2, -3px -2px 4px #f2f2f2;
            border-radius: var(--rad-5);
            padding: 0.5rem;
            font-weight: 600;
            color: var(--primary);
        }
        p {
            text-align: justify;
            margin-left: 0.6rem;
        }
    }
    .twitter-share-button {
        background: blue;
        color: white;
    }
</style>

<div>
    {#if bookContent}
        <section class="container">
            <h1>{bookContent.volumeInfo.title}</h1>
            <summary>{bookContent.volumeInfo.subtitle || ''}</summary>
            <Badge
                categories={bookContent.volumeInfo.categories}
                date={bookContent.volumeInfo.publishedDate} />
            <section class="image">
                <div>
                    <figure>
                        <img
                            src={bookContent.volumeInfo.imageLinks?.thumbnail || DEFAULT_COVER}
                            alt="poster" />
                    </figure>
                </div>
                <div class="image-desc">
                    <div>
                        <h1>{bookContent.volumeInfo.pageCount}</h1>
                        <small>Pages</small>
                    </div>
                    <div>
                        <Button>
                            <Icon data={twitter} />
                        </Button>
                        <Button>
                            <Icon data={shoppingCart} />
                        </Button>
                    </div>
                </div>
            </section>
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
        <article class="section-header">
            <header>Description</header>
            {#if bookContent.volumeInfo.description}
                <p>
                    {@html bookContent.volumeInfo.description}
                </p>
            {/if}
        </article>
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
</div>
