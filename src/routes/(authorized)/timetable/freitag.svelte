<script lang="ts">
	const images = import.meta.glob<any>('$lib/assets/bands/*.png', { eager: true, query: { enhanced: true } });
	const importPrefix = '/src/lib/assets/bands';

	function getImage(name: string) {
		const module = images[`${importPrefix}/${name}`];

		if (!module) {
			throw new Error(`Image ${name} not found`);
		}

		return module.default!;
	}
</script>

<header>
	<h1>TIMETABLE</h1>
	<h2>FREITAG</h2>
	<h3>bandday</h3>
</header>

<em>allgemein</em>
<div class="table-wrapper">
	<table>
		<tr>
			<td>ab 12</td>
			<td>Anreise</td>
		</tr>
		<tr>
			<td>Nammittag</td>
			<td>
				Zeltaufbau, <br />
				1. Bier/Aperol gönnen, Kennenlernen
			</td>
		</tr>
		<tr>
			<td>18.00</td>
			<td>
				<b>
					Official Start (DIE REDE)
					<br />
					PFLICHTTERMIN
				</b>
			</td>
		</tr>
	</table>
</div>

<em>music</em>
<section id="music">
	<h4>MAIN FIELD</h4>
	<article>
		<a href="https://open.spotify.com/track/0SjJDb6fFU16YwSvDK098t?si=faa103da26e24637" target="_blank">
			<div class="time"><span class="bg">18.30 - 19.00</span></div>
			<enhanced:img src={getImage('LENER.png')} alt="LENER"></enhanced:img>
			<p>
				<span class="bg band">LENER</span>
				<br />
				<span class="bg">Singer Songwriterin</span>
			</p>
		</a>
	</article>

	<article class="nolink">
		<div class="time"><span class="bg">19.00 - 20.30</span></div>
		<enhanced:img src={getImage('WETPAINT.png')} alt="Wet Paint"></enhanced:img>
		<p>
			<span class="bg band">WET PAINT</span>
			<br />
			<span class="bg">Cover Rock Band</span>
		</p>
	</article>

	<article>
		<a href="https://open.spotify.com/track/1M6aqNxQXFMsaHGEYaHpo1?si=c4fa8bdbfd1a4956" target="_blank">
			<div class="time"><span class="bg">20.45 - 21.15</span></div>
			<enhanced:img src={getImage('APPARILLOS.png')} alt="Apparillos"></enhanced:img>
			<p>
				<span class="bg band">Die Apparillos</span>
				<br />
				<span class="bg">Party Schlager</span>
			</p>
		</a>
	</article>

	<article class="nolink">
		<div class="time"><span class="bg">21.30 - 23.00</span></div>
		<enhanced:img src={getImage('CSO.png')} alt="CSO"></enhanced:img>
		<p>
			<span class="bg band">C . S . 0</span>
			<br />
			<span class="bg">Hard Trance Groove</span>
		</p>
	</article>
</section>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1,
	h2,
	h3 {
		text-align: center;
		font-size: 5rem;
		margin: 0 auto;
		padding: 0;
		display: inline;
		font-weight: normal;
	}

	h2 {
		background: var(--col);
		letter-spacing: 1rem;
		padding-left: 1ch;
	}

	h3 {
		letter-spacing: 0.5rem;
		font-size: 3rem;
	}

	em {
		font-style: normal;
		font-size: 1.5rem;
		letter-spacing: 0.5rem;
		margin: 1rem;
		margin-top: 2rem;
		display: block;
	}

	.table-wrapper {
		padding: 0 1rem;
		width: 100%;
		border: 3px solid var(--col);
	}

	table {
		margin: 0 auto;
		width: 100%;
		padding: 1rem;
		border-collapse: collapse;
	}

	tr:not(:last-child) {
		border-bottom: 1px solid white;
	}

	td {
		padding: 1rem;
	}

	td:first-child {
		text-align: center;
	}

	td:last-child {
		letter-spacing: 0.2rem;
	}

	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		border: 3rem solid var(--col);
		padding: 1rem;
	}

	h4 {
		font-size: 3rem;
		text-align: center;
		padding: 0;
		margin-top: 0;
		letter-spacing: 0.5rem;
	}

	article.nolink,
	article a {
		display: grid;
		grid-template-areas: 'img overlap time' 'img . .' 'img overlap artist';
		grid-template-columns: 50% 50px auto;
		grid-template-rows: auto 50px auto;
		width: 100%;
		margin-bottom: 3rem;
	}

	.time {
		grid-column: 2 / span 2;
		grid-row: 1;
		font-size: 2rem;
		z-index: 1;
		font-weight: bold;
		margin-top: 2rem;
		letter-spacing: 0.1rem;
	}

	.band {
		font-weight: bold;
		z-index: 1;
		line-height: none;
	}

	span.bg {
		color: black;
		background: #ffffff90;
		text-align: right;
		margin: 0;
		padding: 0 0.5rem;
		float: right;
		position: relative;
		z-index: 2;
	}

	article :global(picture),
	article img {
		grid-column: 1 / span 2;
		grid-row: 1 / span 3;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	article p {
		grid-column: 2 / span 2;
		grid-row: 3;
		margin-bottom: 3rem;
		font-size: 1.7rem;
	}

	@container main (max-width: 600px) {
		h2,
		h1 {
			font-size: 3rem;
			padding-left: 1ch;
		}

		h3 {
			font-size: 2rem;
		}

		div.table-wrapper {
			padding: 0;
		}

		td {
			padding: 0.5rem;
		}
		section {
			border: 0;
			outline: 1rem solid var(--col);
			z-index: -1;
			padding: 0.5rem;
		}
	}

	@container main (max-width: 400px) {
		h2,
		h1 {
			font-size: 2rem;
		}

		h3 {
			font-size: 1.5rem;
		}

		.band,
		.time {
			font-size: 1.5rem;
			line-height: 1.8;
			z-index: 3;
			position: relative;
		}
	}
</style>
