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
        margin: 0 auto;
    }

    h1 {
        color: #3d85ff;
        text-transform: uppercase;
        font-size: 3.5rem;
        font-weight: 100;
        font-family: cursive;
        margin: 0 auto 16px auto;
        width: fit-content;
        border-bottom: 1px solid;
        padding: 0 16px 0 16px;
    }

    summary {
        color: #8db2e7;
        margin: 16px;
        font-family: cursive;
        font-size: 1rem;
    }

    input[type="search"] {
        box-shadow: 3px 3px 4px #c2c2c2, -3px -2px 4px #f2f2f2;
        border-radius: 15px;
        border: none;
        width: 70%;
        padding: 0.8rem;
        outline: none;
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
