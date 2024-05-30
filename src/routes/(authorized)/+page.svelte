<script lang="ts">
	import { colorMap } from '$lib/colors';
	import TextLogo from '$lib/text-logo.svelte';

	const pages = ['anfahrt', 'timetable', 'regeln', 'camping', 'workshops', 'faq'];
</script>

<svelte:head><title>SommerResiDance</title></svelte:head>

<main>
	<TextLogo></TextLogo>
	<ul>
		{#each pages as page}
			{@const color = colorMap.get(page) ?? '#ffffff'}
			<li style:--color={color} style:view-transition-name="page-{page}">
				<a class="page-link" href={`/${page}`}>
					{page}
				</a>
			</li>
		{/each}
	</ul>
	<article>
		<h1>
			<em>Herzlich Willkommen</em>
			auf dem offiziellen, inoffiziellen, super wichtigen Teil der Sommerresidance.
		</h1>
		<p>Wenn du es bis hierher geschafft hast - hast du alles richtig gemacht!</p>
		<p>HERZLICHEN GLÜCKWUNSCH!!</p>
		<p>
			Wir haben keine Philips und Mühen gescheut und hier für euch eine kleine Orientierungspage gebastelt. (also Philip
			hat gebastelt - DANKE!!)
		</p>
		<p>
			Spätestens hier solltest du bemerken, dass wir drei wirklich doll motiviert sind und hoffen, dass ALLE Gäste
			mindestens genauso motiviert sind wie wir.
		</p>
		<p>
			Alle wichtigen Dinge stehen hier und werden regelmäßig aktualisiert. Wenn ihr noch Fragen habt - erst hier
			nachschauen, wenn ihr eure Antwort nicht gefunden habt, schaut nochmal! Wenn ihr dann immer noch nicht weiter
			wisst, fragt gern euer zuständiges Geburtstagskind.
		</p>
		<p>Viel Freude in unserem kleinen VIP-Bereich hier.</p>
		<p>Lest euch alles durch! Wir haben das hier mit viel Mühe geschrieben und Philip (DANKE) gebaut!</p>
		<p><em>Hochachtungsvoll</em></p>
		<p><em>Die stolzen, hochmotivierten, euch liebenden Geburtstagskinder</em></p>

		<p>
			<em>
				PS: Wir freuen uns über jede Unterstützung, die ihr uns zukommen lasst. Gerne <a id="donate" href="/donate">
					hier über die Spenden Seite
				</a>
			</em>
		</p>
	</article>
</main>

<style>
	main {
		height: 100dvh;
		display: grid;
		grid-template-rows: auto 60dvh;
		padding: 1rem;
		width: 100%;
		max-width: 1600px;
		margin: 0 auto;
		background: white;
	}

	main::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: white;
		z-index: -1;
	}

	:global(body) {
		background: white;
	}

	ul {
		padding: 0 2rem;
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 5rem 20rem;
		list-style: none;
	}

	li {
		position: relative;
	}

	h1 {
		font-size: 2rem;
		text-align: center;
	}

	article {
		padding: 2rem;
		padding-bottom: 20vh;
		width: min(90vw, 1000px);
		margin: 0 auto;
		text-wrap: pretty;
	}

	a.page-link {
		position: absolute;
		inset: 0;
		background: var(--color);
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding: 1rem;
		font-size: 4rem;
		width: 100%;
		text-decoration: none;
		text-transform: uppercase;
	}

	a:hover {
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
	}

	/* medium style */
	@media (max-width: 1300px) {
		ul {
			grid-template-rows: 1fr 1fr 1fr;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
	}

	/* mobile style */
	@media (max-width: 800px) {
		main {
			height: auto;
			margin-bottom: 20dvh;
			grid-template-rows: 30dvh auto;
		}

		ul {
			grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		a {
			font-size: 2rem;
			align-items: center;
			position: static;
		}
	}

	#donate {
		text-decoration: underline;
	}
</style>
