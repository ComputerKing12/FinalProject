<script lang="ts">
	import { songs } from '../../lib/playlist';
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import { afterNavigate } from '$app/navigation';
	import AudioPlayer from '../../components/AudioPlayer.svelte';
	// import { Increment, Decrement } from './entry';

	let slide: string = $page.url.searchParams.get('slide')

	if (slide == null)
	{
		slide = "0"
	}

	console.log(slide)

	// afterNavigate(async () => {
	// 	let parser = new DOMParser()
	// 	if ($page.url.href.split('/')[3] == "annotations")
	// 	{
	// 		let doc = parser.parseFromString(document.getElementById("container")?.outerHTML, "text/html").documentElement
	// 		doc.style.display = "grid"
	// 		doc.style.gridTemplateRows = "1fr 5%"
	// 		console.log(doc)
	// 		// document.getElementById("container")?.classList.add("grid2")
	// 		// document.getElementById("container")?.classList.remove("grid3")
	// 	} else
	// 	{
	// 		let doc = parser.parseFromString(document.getElementById("container")?.outerHTML, "text/html").documentElement
	// 		doc.style.display = "grid"
	// 		doc.style.gridTemplateRows = "1fr 5% 10%"
	// 		console.log(doc)
	// 	}
	// })

	if (slide != null && parseInt(slide) >= songs.length)
	{
		throw new Error(`Slide not found ${slide}`)
	}

	function Decrement()
	{
		if (slide != null)
		{
			const SlideNum: number = parseInt(slide)

			if (SlideNum == 0)
			{
				slide = `${songs.length - 1}`
				// window.location.href = `/annotations/?slide=${slide}`
			} else
			{
				slide = `${parseInt(slide) - 1}`
				// window.location.href = `/annotations/?slide=${slide}`
			}
		} else
		{
			// window.location.href = '/annotations/?slide=6'
		}
	}

	function Increment()
	{
		if (slide != null)
		{
			console.log("increment")
			const SlideNum: number = parseInt(slide)

			if (SlideNum >= songs.length - 1)
			{
				slide = "0"
				// window.location.href = `/annotations/?slide=${slide}`
			} else
			{
				slide = `${parseInt(slide) + 1}`
				console.log(songs[slide].source)
				// window.location.href = `/annotations/?slide=${slide}`
			}
		} else
		{
			// window.location.href = '/annotations/?slide=0'
		}
	}
</script>

<main>
	<div class="elem grid3" id="container">
		<div class="container">
			<h1>{parseInt(slide) + 1}. Annotation (4.{songs[parseInt(slide)].lines.lines[0]}-{songs[parseInt(slide)].lines.lines[1]})</h1>
			<p>{songs[parseInt(slide)].lines.description}</p>
			<div class="body">
				<div class="child1">
					<p>{songs[parseInt(slide)].lines.QuoteLatin}</p>
				</div>
				<p>{songs[parseInt(slide)].lines.QuoteEnglish}</p>
				<div class="annotation">
					<p>{songs[parseInt(slide)].lines.annotation}</p>
				</div>
			</div>
		</div>
		<div class="navigation">
			<button on:click={Decrement}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="4em" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
			</button>
			<button on:click={Increment}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="4em" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
			</button>
		</div>
		<svelte:component this={AudioPlayer} 
			slide={slide}
		/>
	</div>
	<!-- <div class="elem grid3" id="container">
		<div class="container">
			<h1>{parseInt(slide) + 1}. Annotation (4.{songs[parseInt(slide)].lines.lines[0]}-{songs[parseInt(slide)].lines.lines[1]})</h1>
			<p>{songs[parseInt(slide)].lines.description}</p>
			<div class="body">
				<div class="child1">
					<p>{songs[parseInt(slide)].lines.QuoteLatin}</p>
				</div>
				<p>{songs[parseInt(slide)].lines.QuoteEnglish}</p>
				<div class="annotation">
					<p>{songs[parseInt(slide)].lines.annotation}</p>
				</div>
			</div>
		</div>
		<div class="navigation">
			<button on:click={Decrement}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="4em" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
			</button>
			<button on:click={Increment}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="4em" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
			</button>
		</div>
		<svelte:component this={AudioPlayer} 
			name="{songs[parseInt(slide)].name}" 
			artist="{songs[parseInt(slide)].artist.name}" 
			album="{songs[parseInt(slide)].album}" 
			cover="{songs[parseInt(slide)].cover}" 
			source="{songs[parseInt(slide)].source}"
		/>
	</div> -->
</main>

<style lang="sass">
	main
		height: 100%

	.elem
		height: 100%
		display: grid
		// grid-template-rows: 1fr 5%

	button
		background-color: inherit
		color: #fff
		border: none
		cursor: pointer
		padding: 2em
	.grid3
		display: grid
		grid-template-rows: 1fr 5% 12.5%

		& > .navigation > button
			background: inherit
			border: none
			cursor: pointer

	.container
		display: grid
		// grid-template-columns: 1fr

	.navigation
		position: relative
		height: 100%
		display: flex
		
		& > *
			bottom: 0
			position: absolute

			&:nth-child(1)
				left: 0
			&:nth-child(2)
				right: 0

	.body
		display: grid
		grid-template-columns: 1fr 1fr
		place-items: center

		& > p
			margin-left: 1.5em
			text-align: justify
			margin-right: 0.5em

		& > div > p
			margin-left: 1.5em
			text-align: justify
			margin-right: 0.5em

	.child1
		border-right: 2px dashed black
	.annotation
		grid-column: 1 / 3
		margin-inline: 2.25in
		text-align: center
		margin-top: 2em
	
</style>