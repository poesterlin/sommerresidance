<script lang="ts">
	import { colorMap, getFontColor } from '$lib/colors';

	const pages = ['anfahrt', 'timetable', 'regeln', 'camping', 'workshops', 'faq'];
</script>

<main>
	<img src="/text-logo.svg" alt="Sommerresidance logo text" />
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
	}

	ul {
		padding: 0;
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 5rem 20rem;
		list-style: none;
		width: 100%;
		max-width: 1600px;
		margin: 0 auto;
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
