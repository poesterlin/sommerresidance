<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<ul>
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/" data-sveltekit-replacestate>Home</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/faq') ? 'page' : undefined}>
			<a href="/faq" data-sveltekit-replacestate>FAQ</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/timetable') ? 'page' : undefined}>
			<a href="/timetable" data-sveltekit-replacestate>Timetable</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/workshops') ? 'page' : undefined}>
			<a href="/workshops" data-sveltekit-replacestate>Workshops</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/anfahrt') ? 'page' : undefined}>
			<a href="/anfahrt" data-sveltekit-replacestate>Anfahrt</a>
		</li>
	</ul>
</header>

<style>
	header {
		view-transition-name: header;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0rem 2em;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		position: absolute;
		content: '';
		--size: 6px;
		width: 0;
		height: 0;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
		view-transition-name: active-page;
	}

	a {
		display: flex;
		height: 3em;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
