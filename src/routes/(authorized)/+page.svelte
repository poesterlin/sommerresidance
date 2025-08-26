<script lang="ts">
	import { page } from '$app/stores';
	import { colorMap } from '$lib/colors';
	import TextLogo from '$lib/text-logo.svelte';

	const images = import.meta.glob('$lib/assets/*.png', {
		eager: true,
		query: {
			enhanced: true,
			w: 320
		}
	});

	function getImage(page: string) {
		const { default: img } = images[`/src/lib/assets/${page}.png`] as { default: string };
		return img;
	}

	const pages = ['anfahrt', 'timetable', 'regeln', 'camping', 'workshops', 'faq'];
</script>

<svelte:head><title>SommerResiDance</title></svelte:head>

<main>
	<TextLogo></TextLogo>
	<ul>
		{#each pages as page}
			{@const src = getImage(page)}
			{@const color = colorMap.get(page) ?? '#ffffff'}
			<li style:--color={color} style:view-transition-name="page-{page}">
				<a class="page-link" href={`/${page}`}>
					<enhanced:img {src} alt={page} />
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
		<p><b>HERZLICHEN GLÜCKWUNSCH!!</b></p>
		<p>
			Wir haben keine Philips und Mühen gescheut und hier für euch eine kleine Orientierungspage gebastelt. (also Philip
			hat gebastelt - DANKE!!)
		</p>
		<p>
			Spätestens hier solltest du bemerken, dass wir drei wirklich doll motiviert sind und hoffen, dass ALLE Gäste
			mindestens doppelt, wenn nicht genauso motiviert sind wie wir.
		</p>
		<p>
			Alle wichtigen Dinge stehen hier und werden regelmäßig aktualisiert.
			<br />
			Wenn ihr noch Fragen habt - erst hier nachschauen!
			<br />
			Wenn ihr eure Antwort nicht gefunden habt, schaut nochmal!
			<br />
			Wenn ihr dann immer noch nicht weiter wisst, fragt gern euer zuständiges Geburtstagskind.
		</p>

		<p>
			Deine Vorfreude ist bereits im Unermesslichen?
			<br />
			Du würdest am liebsten jeden Schritt der Planung mitverfolgen?
			<br />
			Du könntest jederzeit explodieren vor Partylust-Overdose?
			<br />
			<!-- Um euch vor und auf unserem Festival zu erreichen, dürft ihr gerne
			<a class="link" href={import.meta.env.VITE_WA_GROUP} target="_blank">
				DIESEM LINK folgen und unserer WhatsApp Gruppe beitreten.
			</a> -->
		</p>

		<p>
			Lest euch alles durch! Wir haben das hier mit viel Mühe ausgedacht und geschrieben. Es sind viele Infos, aber wir
			wollen eine unbeschwerte, problemlose Zeit mit jedem einzelnen von euch.
		</p>

		<p>Viel Freude in unserem kleinen VIP-Bereich hier.</p>
		<p>Lest euch alles durch! Wir haben das hier mit viel Mühe geschrieben und Philip (DANKE) gebaut!</p>
		<p><em>Hochachtungsvoll</em></p>
		<p><em>Die stolzen, hochmotivierten, euch liebenden Geburtstagskinder</em></p>
	</article>
</main>

<style>
	main {
		height: 100dvh;
		display: grid;
		grid-template-rows: auto auto;
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
		gap: 5rem;
		margin: auto;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
	}

	li {
		display: flex;
		justify-content: center;
		box-shadow: inset 0 0 0 10px var(--color);
	}

	img {
		width: 100%;
		object-fit: cover;
		object-position: center;
	}

	h1 {
		font-size: 2rem;
		text-align: center;
	}

	article {
		padding: 2rem;
		padding-bottom: 20vh;
		width: min(90vw, 1000px);
		margin: 4vh auto 0;
		text-wrap: pretty;
	}

	a:hover img {
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
	}

	a.link {
		text-decoration: underline;
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

		a.page-link {
			font-size: 2rem;
			align-items: center;
			position: static;
		}
	}
</style>
