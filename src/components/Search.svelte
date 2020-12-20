<script>
    import { URL } from "../constants";

    import { results, pagination } from "../stores";

    function onSubmit(e) {
        e.preventDefault();
        fetch(`${URL}${e.target.book.value}&maxResults=12`)
            .then((data) => data.json())
            .then((response) => results.update(() => response))
            .catch((err) => console.log(err));
        pagination.update((value) => ({
            ...value,
            searchedTerm: e.target.book.value,
        }));
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
