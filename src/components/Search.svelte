<script>
    import { results } from "../stores";
    let searchedTerm = "";
    function onSubmit(e) {
        e.preventDefault();
        console.dir(e.target);
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${e.target.book.value}&orderBy=newest`
        )
            .then((data) => data.json())
            .then((response) => results.update(() => response))
            .catch((err) => console.log(err));
    }
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>

<main>
    <h1>Bookplorer</h1>
    <summary>Find what you love to read.</summary>
    <section>
        <form on:submit={onSubmit}><input type="search" name="book" /></form>
    </section>
</main>
