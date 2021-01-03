<script>
    import { sidebarContent } from "../stores";
    export let image, title, category, author, selfLink;

    function toggleSidebar() {
        sidebarContent.update(() => selfLink);
    }
</script>

<style lang="scss">
    li {
        border: 1px solid #e2e2e2;
        list-style-type: none;
        max-width: 70%;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
        &:hover {
            cursor: pointer;
            box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.6);
        }
        figure {
            max-height: 220px;
            overflow: hidden;
            position: relative;
            margin: 1px;
            img {
                width: 100%;
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
