<script>
    import { onDestroy } from "svelte";
    import Icon from "svelte-awesome";
    import {
        Twitter,
        Facebook,
        LinkedIn,
    } from "svelte-share-buttons-component";
    import { fade } from "svelte/transition";
    import { shareAlt, shoppingCart } from "svelte-awesome/icons";
    import { DEFAULT_COVER, tweetBuilder } from "../constants";
    import { sidebarContent } from "../stores";
    import Badge from "./Badge.svelte";
    import Button from "./Button.svelte";
    import Popup from "./Popup.svelte";
    import Spinner from "./Spinner.svelte";

    let bookContent;

    const url = "https://bookplorer-mn5g9.ondigitalocean.app/";

    function closeSidebar() {
        sidebarContent.update(() => "");
    }

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
    .close {
        box-shadow: 3px 3px 4px #c2c2c2, -3px -2px 4px #f2f2f2;
        padding: 0.3rem;
        color: var(--primary);
        font-size: 0.9rem;
        cursor: pointer;
        font-weight: bold;
        width: 15px;
        text-align: center;
    }
</style>

<div>
    {#if bookContent}
        <div on:click={closeSidebar} class="close">X</div>
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
                        <Popup let:toggled={pressed}>
                            <Button {pressed}>
                                <Icon data={shareAlt} scale="1.4" />
                            </Button>
                            {#if pressed}
                                <div class="popuptext" transition:fade>
                                    <Twitter
                                        class="share-button"
                                        text={tweetBuilder(bookContent.volumeInfo.title)}
                                        {url} />
                                    <Facebook
                                        class="share-button"
                                        text={tweetBuilder(bookContent.volumeInfo.title)}
                                        {url} />
                                    <LinkedIn
                                        class="share-button"
                                        text={tweetBuilder(bookContent.volumeInfo.title)}
                                        {url} />
                                </div>
                            {/if}
                        </Popup>
                        <Popup let:toggled={pressed}>
                            <Button {pressed}>
                                <Icon data={shoppingCart} scale="1.4" />
                            </Button>
                            {#if pressed}
                                <div class="popuptext" transition:fade>
                                    <a
                                        target="__blank"
                                        rel="noreferrer noopener"
                                        href={`https://www.amazon.in/s?k=${bookContent.volumeInfo.title}`}>Buy
                                        on Amazon</a>
                                </div>
                            {/if}
                        </Popup>
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
    {:else}
        <section style="margin-top: 24px">
            <Spinner size="big" center />
        </section>
    {/if}
</div>
