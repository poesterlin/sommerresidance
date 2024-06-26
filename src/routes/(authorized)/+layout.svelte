<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { colorMap, getFontColor } from '$lib/colors';
	import Header from '$lib/header.svelte';
	import { onDestroy, onMount } from 'svelte';
	import Toast from '$lib/toast.svelte';
	import { toasts } from '$lib/toast';

	const defaultColor = '#ffffff';
	let color = defaultColor;
	let history = [defaultColor];

	$: {
		if (history[history.length - 1] !== color) {
			history.push(color);
		}

		if (history.length > 2) {
			history.shift();
		}

		let previousColor = history[history.length - 2] ?? defaultColor;
		if (browser) {
			document.documentElement.style.setProperty('--prev-color', previousColor);
		}
	}

	$: isRoot = $page.url.pathname === '/';

	onMount(() => {
		let route = $page.route.id;
		if (!route) {
			return;
		}

		route = route.split('/').slice(2).join('/');
		color = colorMap.get(route) ?? defaultColor;
	});

	onDestroy(() => {
		if (browser) {
			document.documentElement.style.setProperty('--prev-color', 'white');
		}
	});

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
		color = colorMap.get(route) ?? defaultColor;
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

{#if $toasts.length > 0}
	<div id="toasts">
		{#each $toasts as toast (toast.id)}
			<Toast {...toast} --color={color} --font-color={getFontColor(color)} />
		{/each}
	</div>
{/if}

<style>
	:global(body) {
		background-color: var(--prev-color, white);
	}

	div {
		display: grid;
		grid-template-columns: 1fr auto;
		min-height: 100dvh;
		background-color: var(--color);
		color: var(--font-color);
	}

	main {
		padding: 1rem;
		margin-left: 1rem;
		view-transition-name: main;
		user-select: text;
		margin-bottom: 20dvh;
		max-width: 800px;
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
			transform: translateX(60%);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-200px);
		}
	}

	@media (prefers-reduced-motion: no-preference) and (min-width: 800px) {
		:root::view-transition-old(root) {
			will-change: opacity, transform;
			animation:
				90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
		}

		:root::view-transition-new(root) {
			will-change: opacity, transform;
			animation:
				210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
		}
	}

	#toasts {
		position: fixed;
		display: flex;
		pointer-events: visiblePainted;
		flex-direction: column-reverse;
		align-items: flex-start;
		gap: 1rem;
		padding: 1rem;
		z-index: 1000;
		bottom: 0;
		left: 0;
		width: min(80%, 450px);
	}
</style>
