<script>
	import Search from "./components/Search.svelte";
	import Shelf from "./components/Shelf.svelte";
	import Sidebar from "./components/Sidebar.svelte";
	import { sidebarContent } from "./stores";
	import { onDestroy } from "svelte";

	let isSibarVisible;

	let unsubscribe = sidebarContent.subscribe((value) => {
		isSibarVisible = value;
	});

	onDestroy(unsubscribe);
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
		max-width: 566px;
	}
</style>

<main class="container">
	<section class="shelf-section">
		<Search />
		<Shelf />
	</section>
	{#if isSibarVisible}
		<section class="display-section">
			<Sidebar />
		</section>
	{/if}
</main>
