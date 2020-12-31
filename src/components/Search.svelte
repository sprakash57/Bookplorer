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
        margin-top: 0;
        margin-bottom: 16px;
    }

    summary {
        color: #8db2e7;
        margin: 16px;
        font-family: cursive;
        font-size: 1.1rem;
    }

    input[type="search"] {
        box-shadow: -2px 2px 9px 4px rgb(43 42 42 / 25%),
            0px -4px 12px 0 rgba(255, 255, 255, 0.3);
        border-radius: 5px;
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
