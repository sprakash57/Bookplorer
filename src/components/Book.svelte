<style lang="scss">
  li {
    border: 1px solid #e2e2e2;
    border-radius: var(--rad-10);
    list-style-type: none;
    max-width: 70%;
    box-shadow: 3px 3px 4px #c2c2c2, -3px -2px 4px #f2f2f2;
    &:hover {
      cursor: pointer;
    }
    figure {
      max-height: 220px;
      overflow: hidden;
      position: relative;
      margin: 1px;
      img {
        width: 100%;
        border-radius: var(--rad-10);
      }
    }
    article {
      padding: 10px;
      p {
        margin-bottom: 8px;
        margin-top: 0;
      }
      summary {
        font-size: 0.8rem;
      }
    }
  }
</style>

<script>
  import { sidebarContent } from '../stores';
  export let image, title, category, author, selfLink;

  function toggleSidebar() {
    sidebarContent.update(() => selfLink);
  }
</script>

<main>
  <li on:click={toggleSidebar} title="Click to explore">
    <figure><img src={image} alt="pic" /></figure>
    <article>
      <p>{title}</p>
      <summary>{author ? author[0] : ''}</summary>
      <summary>{category ? category[0] : ''}</summary>
    </article>
  </li>
</main>
