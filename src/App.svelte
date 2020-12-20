<script>
	import Search from "./components/Search.svelte";
	import Shelf from "./components/Shelf.svelte";
	import Sidebar from "./components/Sidebar.svelte";
</script>

<style>
	.container {
		display: flex;
	}
	.shelf-section {
		flex-grow: 2;
	}
	.display-section {
		flex-grow: 1;
	}
</style>

<main class="container">
	<section class="shelf-section">
		<Search />
		<Shelf />
	</section>
	<section class="display-section">
		<Sidebar />
	</section>
</main>
