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
	<h2>SAMSTAG</h2>
	<h3>djday</h3>
</header>

<em>allgemein</em>
<div class="table-wrapper">
	<table>
		<tr>
			<td>10.00-10.20</td>
			<td>Yoga mit Julia</td>
		</tr>
		<tr>
			<td>11.00 - 16.00</td>
			<td>
				<a href="/workshops">Workshops - HIER</a>
			</td>
		</tr>
	</table>
</div>

<em>music</em>
<section id="music">
	<h4>MAIN FIELD</h4>
	<article class="nolink">
		<div class="time"><span class="bg">12.30 - 14.00</span></div>
		<enhanced:img src={getImage('CoSmO.png')} alt="CoSmO"></enhanced:img>
		<p>
			<span class="bg band">CoSmO</span>
			<br />
			<span class="bg">Jungle Music</span>
		</p>
	</article>

	<article class="nolink">
		<div class="time"><span class="bg">14.00-15.30</span></div>
		<enhanced:img src={getImage('DJESSENCE.png')} alt="DJ ESSNCE"></enhanced:img>
		<p>
			<span class="bg band">DJ ESSNCE</span>
			<br />
			<span class="bg">Festival Sound</span>
		</p>
	</article>

	<article class="nolink">
		<div class="time"><span class="bg">15.30-17.00</span></div>
		<enhanced:img src={getImage('MARKUSTOEPFER.png')} alt="Markus Töpfer"></enhanced:img>
		<p>
			<span class="bg band">MARKUS TOEPFER</span>
			<br />
			<span class="bg">Sundowner Techno</span>
		</p>
	</article>

	<article class="nolink">
		<div class="time"><span class="bg">17.00-18.30</span></div>
		<enhanced:img src={getImage('PASCONDA.png')} alt="Pasconda"></enhanced:img>
		<p>
			<span class="bg band">PASCONDA</span>
			<br />
			<span class="bg">Bouncy House</span>
		</p>
	</article>

	<article class="nolink">
		<div class="time"><span class="bg">18.30-20.00</span></div>
		<enhanced:img src={getImage('JUI.png')} alt="JUI"></enhanced:img>
		<p>
			<span class="bg band">JUI</span>
			<br />
			<span class="bg">Hardgroove</span>
		</p>
	</article>

	<article class="nolink">
		<div class="time"><span class="bg">20.00-21.00</span></div>
		<enhanced:img src={getImage('ANTHROPIX.png')} alt="Anthropix"></enhanced:img>
		<p>
			<span class="bg band">ANTHROPIX</span>
			<br />
			<span class="bg">Indie Dance, Techno</span>
		</p>
	</article>

	<article class="nolink">
		<div class="time"><span class="bg">21.00-22.30</span></div>
		<enhanced:img src={getImage('SOSHUAJÜTZLE.png')} alt="SOSHUA JÜTZLE"></enhanced:img>
		<p>
			<span class="bg band">SOSHUA JÜTZLE</span>
			<br />
			<span class="bg">Trash Trance</span>
		</p>
	</article>

	<footer>
		<h4>NIGHT PARK</h4>
		<h5>birthday kids music</h5>
	</footer>
</section>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h2,
	h3,
	h4 {
		text-align: center;
		font-size: 5rem;
		margin: 0 auto;
		padding: 0;
		font-weight: normal;
	}

	h2 {
		background: var(--col);
		letter-spacing: 1rem;
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

	a {
		color: white;
		text-decoration: underline;
		text-underline-offset: 0.2rem;
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

	article.nolink {
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

	footer {
		text-align: center;
	}

	h5 {
		font-size: 2rem;
		margin-top: 0;
		font-weight: normal;
	}

	@container main (max-width: 600px) {
		h2 {
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
		h2 {
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
