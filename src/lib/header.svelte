<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<ul>
		<!-- <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" data-sveltekit-replacestate>Home</a>
			</li> -->
		<li aria-current={$page.url.pathname.startsWith('/anfahrt') ? 'page' : undefined}>
			<a href="/anfahrt" data-sveltekit-replacestate>Anfahrt</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/faq') ? 'page' : undefined}>
			<a href="/faq" data-sveltekit-replacestate>Faq</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/workshops') ? 'page' : undefined}>
			<a href="/workshops" data-sveltekit-replacestate>Workshops</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/camping') ? 'page' : undefined}>
			<a href="/camping" data-sveltekit-replacestate>Camping</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/timetable') ? 'page' : undefined}>
			<a href="/timetable" data-sveltekit-replacestate>Timetable</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/regeln') ? 'page' : undefined}>
			<a href="/regeln" data-sveltekit-replacestate>Regeln</a>
		</li>
	</ul>
</header>

<style>
	header {
		view-transition-name: header;
		color: black;
		padding: 10rem 2rem;
	}

	ul {
		margin: 0;
		display: grid;
		justify-content: end;
		align-items: center;
		list-style: none;
		height: 100%;
	}

	li[aria-current='page'] a {
		color: white;
	}

	a {
		color: black;
		display: block;
		font-size: 5rem;
		text-align: right;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
