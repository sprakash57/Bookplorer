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

<style lang="scss">
	.container {
		display: flex;
	}
	.shelf-section {
		flex-grow: 2;
	}
	.display-section {
		flex-grow: 1;
		width: 500px;
		max-width: 500px;
		overflow-x: auto;
		height: 90vh;
		padding: 0 8px 8px 8px;
	}
	@media only screen and (max-width: 600px) {
		.display-section {
			position: absolute;
			top: 0;
			right: 0;
			background: white;
			overflow-x: auto;
			height: 90vh;
			width: fit-content;
			padding: 8px;
		}
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
