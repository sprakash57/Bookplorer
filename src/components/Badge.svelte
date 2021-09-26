<style lang="scss">
  p {
    text-align: center;
    span {
      box-shadow: 3px 3px 4px #c2c2c2, -3px -2px 4px #f2f2f2;
      border-radius: var(--rad-10);
      padding: 0.5rem;
      color: var(--primary);
      font-size: 0.8rem;
      cursor: default;
    }
  }
</style>

<script>
  export let categories,
    date = '';
  console.log(categories);
</script>

<p>
  {#if categories && categories.length}
    <span title="Genre">{categories[0]}</span>
  {/if}
  {#if date}<span title="Published date">{date}</span>{/if}
</p>
