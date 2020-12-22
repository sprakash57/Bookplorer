<script>
    export let categories,
        date = "";
    console.log(categories);
</script>

<style lang="scss">
    p {
        text-align: center;
        span {
            padding: 5px;
            background: tomato;
            color: white;
            font-size: 0.8rem;
        }
    }
</style>

<p>
    {#if categories && categories.length}<span>{categories[0]}</span>{/if}
    {#if date}<span>{date}</span>{/if}
</p>
