<script lang="ts">
	import { afterNavigate, onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { colorMap, getFontColor } from '$lib/colors';
	import Header from '$lib/header.svelte';

	const defaultColor = '#ffffff';
	let color = defaultColor;

	$: isRoot = $page.url.pathname === '/';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	afterNavigate((navigation) => {
		let route = navigation.to?.route.id;
		if (!route) {
			return;
		}

		// route starts with '/(authorized)/'
		route = route.split('/').slice(2).join('/');

		if (route && colorMap.has(route)) {
			color = colorMap.get(route) ?? defaultColor;
		}
	});
</script>

{#if isRoot}
	<slot />
{:else}
	<div style:--color={color} style:--font-color={getFontColor(color)}>
		<main>
			<slot />
		</main>
		<Header />
	</div>
{/if}

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		height: 100dvh;
		background-color: var(--color);
		color: var(--font-color);
		view-transition-name: page;
	}

	main {
		padding: 1rem;
		view-transition-name: main;
		user-select: auto;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		:root::view-transition-old(root) {
			animation:
				90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
		}

		:root::view-transition-new(root) {
			animation:
				210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
		}
	}
</style>
