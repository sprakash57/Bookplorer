<script>
    export let categories,
        date = "";
    console.log(categories);
</script>

<style lang="scss">
    p {
        text-align: center;
        span {
            box-shadow: 3px 3px 4px #c2c2c2, -3px -2px 4px #f2f2f2;
            border-radius: var(--rad-10);
            padding: 0.5rem;
            color: var(--primary);
            font-size: 0.8rem;
        }
    }
</style>

<p>
    {#if categories && categories.length}<span>{categories[0]}</span>{/if}
    {#if date}<span>{date}</span>{/if}
</p>
