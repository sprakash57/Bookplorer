<script>
    import { onDestroy } from "svelte";

    import {
        Twitter,
        Facebook,
        LinkedIn,
    } from "svelte-share-buttons-component";
    import { fade } from "svelte/transition";
    import { tweetBuilder } from "../constants";
    import { togglePopup } from "../stores";

    export let title;
    const url = "https://bookplorer-mn5g9.ondigitalocean.app/";
    let toggled = false;
    let unsubscribe = togglePopup.subscribe((value) => {
        toggled = value;
    });

    function handlePopup() {
        togglePopup.update((value) => !value);
    }

    onDestroy(unsubscribe);
</script>

<style>
    /* Popup container - can be anything you want */
    .popup {
        position: relative;
        display: inline-block;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* The actual popup */
    .popup .popuptext {
        width: 160px;
        background-color: #d3d1d1;
        border-radius: var(--rad-5);
        padding: 8px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -80px;
    }

    /* Popup arrow */
    .popup .popuptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }
</style>

<div class="popup" on:click={handlePopup}>
    <slot />
    {#if toggled}
        <div class="popuptext" transition:fade>
            <Twitter class="share-button" text={tweetBuilder(title)} {url} />
            <Facebook class="share-button" text={tweetBuilder(title)} {url} />
            <LinkedIn class="share-button" text={tweetBuilder(title)} {url} />
        </div>
    {/if}
</div>
