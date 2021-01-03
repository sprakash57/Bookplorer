<script>
    import { createEventDispatcher } from "svelte";
    export let pressed = false,
        title = "";
    const dispatch = createEventDispatcher();
    function handleClick() {
        dispatch("message");
        pressed = !pressed;
    }
</script>

<style lang="scss">
    .btn {
        border: none;
        background: none;
        padding: 0.7rem;
        box-shadow: 3px 3px 4px #c2c2c2, -3px -2px 4px #f2f2f2;
        border-radius: var(--rad-15);
        color: var(--primary);
        &:hover {
            cursor: pointer;
        }
        &:active {
            background: none;
        }
    }
    .pressed {
        box-shadow: inset 3px 3px 4px #c2c2c2, 4px 4px 4px #f2f2f2;
    }
</style>

<button on:click={handleClick} class={pressed ? 'btn pressed' : 'btn'} {title}>
    <slot />
</button>
