<script lang="ts">
	import { afterUpdate, onDestroy } from 'svelte';
	import { base } from '$app/paths'
	// import { goto } from '$app/navigation';
	export const prerender = false;

	let activeLink = null;

	let top = [
		{ display: 'Welcome', url: `${base}/`, active: false },
		{ display: 'Album Name', url: `${base}/album`, active: false },
		{ display: 'Artists/Characters', url: `${base}/artists`, active: false },
		{ display: 'Playlist', url: `${base}/playlist`, active: false },
		{ display: 'Favs', url: `${base}/favorite`, active: false }
	];

	let bottom = [
		['Bookmarks', `${base}/bookmarks`],
		['Our Goals', `${base}/goals`],
		['Gallery', `${base}/gallery`],
		['Annotations',`${base}/annotations?slide=0`],
		['Contact', `${base}/contact`]
	];

	// function updateActiveLink() {
	// 	const { path } = 'currentRoute';

	// 	top.forEach((item) => {
	// 		item.active = item.url === path;
	// 	});
	// }

	// $: {
	// 	afterUpdate(updateActiveLink);
	// 	onDestroy(updateActiveLink);
	// }
</script>

<div class="nav">
	<div class="top">
		<div class="container">
			{#each top as item (item.url)}
				<div class="item">
					<a href={item.url} class:selected={item.active}>{item.display}</a>
				</div>
			{/each}
		</div>
	</div>
	<div class="bottom">
		<div class="container">
			{#each bottom as item}
				<div class="item">
					<a href={item[1]}>{item[0]}</a>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="sass">
    .nav
        width: 100%
        height: 100%

        display: grid
        grid-template-rows: 1fr 1fr

        // overflow: hidden
        background: #000

    .item
        padding-block: 0.5em
        width: 100%
        text-align: center

    .container
        display: flex
        align-items: center
        height: 100%
        flex-direction: column
        justify-content: center 

    a
        text-decoration: none
        color: #fff
        display: block
        width: 100%
        padding-block: 1em
</style>
