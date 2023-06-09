<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
    import AudioPlayer from '../components/AudioPlayer.svelte';
</script>

<main>
	<Navbar />
    <slot />
</main>

<style lang="sass">
    main
        width: 100vw
        height: 100%
        display: grid
        grid-template-columns: 20% 1fr

        padding: 0
        margin: 0
        position: absolute
        left: 0
        top: 0
</style>
