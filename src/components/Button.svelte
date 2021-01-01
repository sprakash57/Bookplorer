<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function handleClick() {
        dispatch("message");
    }
</script>

<style lang="scss">
    .btn {
        border: none;
        background: none;
        font-size: 1rem;
        font-family: cursive;
        font-weight: bold;
        padding: 0.7rem;
        box-shadow: 3px 3px 4px #c2c2c2, -3px -2px 4px #f2f2f2;
        border-radius: var(--rad-15);
        color: var(--primary);
        &:active {
            box-shadow: inset 3px 3px 4px #c2c2c2, 4px 4px 4px #f2f2f2;
            border: none;
            background: none;
        }
        &:hover {
            cursor: pointer;
        }
    }
</style>

<button on:click={handleClick} class="btn">
    <slot />
</button>
