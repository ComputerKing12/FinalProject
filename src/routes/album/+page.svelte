<script lang="ts">
	import { LoremIpsum } from 'lorem-ipsum';
	import { playlist } from '../../lib/playlist';

	const lorem = new LoremIpsum({
		sentencesPerParagraph: {
			max: 8,
			min: 4
		},
		wordsPerSentence: {
			max: 16,
			min: 4
		}
	});
</script>

<main>
	<div class="header">
		<div class="title">
			<h2>{playlist}</h2>
		</div>
        <div class="title">
		    <img src="https://www.scholastic.com/content/dam/parents/OptimizedDesignImages/Batch13b/surviving-rumor-mill-article-4-3.jpg" alt="Rumor" width="100%"/>
        </div>
    </div>
	<div class="body">
		<h2 style="color: #fff;">Playlist Summary</h2>
		<p>{lorem.generateSentences(10)}</p>
	</div>
</main>

<style lang="sass">
    main
        display: grid
        grid-template-rows: 60% 1fr
        color: #1ed760

    .header
        background-color: #666
        position: relative
        display: grid
        grid-template-columns: 80% 1fr

    .title
        display: flex
        align-items: end
        text-align: center

    h2
        width: 100%
    p
        color: #eee
        text-align: justify

    .body
        background-color: #444
</style>
