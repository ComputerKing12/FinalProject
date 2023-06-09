<script lang="ts">
	import { playlist, songs } from '../../lib/playlist';
</script>

<main>
	<div class="top">
		<p>{playlist}</p>
	</div>
	<div class="bottom">
		<table>
			<tr>
				<th>#</th>
				<th>Song Title</th>
				<th>Artist</th>
				<th>Album</th>
				<th>Line #s</th>
			</tr>
			{#each songs as s, i}
				<tr>
					<td>{i + 1}</td>
					<td>
						<a href="/annotations/?slide={i}">{s.name}</a>
					</td>
					<td>{s.artist.name}</td>
					<td>{s.album}</td>
					<td>{s.lines.lines[0]}-{s.lines.lines[1]}</td>
				</tr>
			{/each}
		</table>
	</div>
</main>

<style lang="sass">
	main
		display: grid
		grid-template-rows: 40% 1fr
	table
		width: 95%
		border-collapse: collapse
		margin: auto

	th
		text-align: left
		margin: 0
		padding: 0
		border-bottom: 2px solid black

	a
		text-decoration: none
		cursor: pointer
		color: #fff
</style>
