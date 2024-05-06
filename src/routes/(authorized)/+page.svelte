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
				<a href={`/${page}`}>
					{page}
				</a>
			</li>
		{/each}
	</ul>
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

	a {
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
		ul {
			grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		a {
			font-size: 2rem;
			align-items: center;
		}
	}
</style>
