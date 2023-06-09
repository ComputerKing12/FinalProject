<script lang="ts">
	import { songs } from '../../lib/playlist';
</script>

<main>
	<div class="container">
		{#each songs as a}
			<div class="card">
				<img src={a.artist.url} alt="{a.artist.name} Image" />
				<h4>{a.artist.name}</h4>
				<p>{a.artist.description}</p>
			</div>
		{/each}
	</div>
</main>

<style lang="sass">
    main
        width: 100%
        margin: 0
        padding: 0
    .container
        display: flex
        gap: 2em
        flex-direction: row
        flex-wrap: wrap
        align-items: center
        justify-content: center
        width: 100%
    .card
        background-color: #303030
        width: 15em
        border-radius: 10%
        display: flex
        flex-direction: column
        justify-content: center
        overflow: hidden
        padding: none
        margin: none

        & > img
            align-self: center
            border-radius: 0 0 10% 10%

        & > h4, p
            position: relative
            left: 2em
            width: 12em
    img
        aspect-ratio: 1
        width: 15em
</style>
