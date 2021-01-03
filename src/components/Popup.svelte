<script>
    import { togglePopup } from "../stores";
    let toggled = false;

    function handlePopup() {
        toggled = !toggled;
        togglePopup.update(() => toggled);
    }
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
</style>

<div class="popup" on:click={handlePopup}>
    <slot {toggled} />
</div>
