<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let width = 0;
	$: isMobile = width < 800;

	let show = false;
	$: expanded = isMobile && show;

	let isDragging = false;
	let startX = 0;
	let panelDelta = 0;

	let sliderEl: HTMLUListElement;
	let sliderWidth: number;

	onMount(() => {
		const observer = new ResizeObserver((entries) => {
			for (let entry of entries) {
				sliderWidth = entry.contentRect.width;
			}
		});

		observer.observe(sliderEl);
	});

	afterNavigate(() => {
		show = false;
	});

	function rotate(_node: any, { delay = 0, duration = 200 }) {
		return {
			delay,
			duration,
			css: (t: number) => `transform: rotateY(${t * 180}deg);
			opacity: ${t - 0.3};
			transform-origin: 50% 50%;
			`
		};
	}

	function update(event: PointerEvent) {
		if (!isDragging) {
			return;
		}

		panelDelta = event.clientX - startX;
	}

	function start(event: PointerEvent) {
		if (!isMobile) {
			return;
		}

		isDragging = true;
		startX = event.clientX;
	}

	function stop() {
		isDragging = false;

		if (Math.abs(panelDelta) > width / 3) {
			show = panelDelta < 0;
		}

		panelDelta = 0;
	}

	function toPercent(valueInPixels: number) {
		if (valueInPixels === 0) return '';

		const current = show ? 0 : 1;
		const value = valueInPixels / sliderWidth;
		const sum = current + value;
		const clamped = Math.min(1, Math.max(0, sum));

		return `${clamped * 100}%`;
	}

	function noSelect(event: Event) {
		if (isDragging) {
			event.preventDefault();
			event.stopPropagation();
		}
	}
</script>

<svelte:window
	bind:innerWidth={width}
	on:pointerdown={start}
	on:pointermove={update}
	on:pointerup={stop}
	on:click={stop}
	on:select={noSelect}
/>

<header>
	<button on:click={() => (show = !show)}>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			{#if expanded}
				<g transition:rotate={{}}>
					<path
						d="M21 6.41L19.59 5 12 12.59 4.41 5 3 6.41 10.59 14 3 21.59 4.41 23 12 15.41 19.59 23 21 21.59 13.41 14 21 6.41z"
					/>
				</g>
			{:else}
				<g transition:rotate={{}} fill="var(--font-color)">
					<path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z" />
				</g>
			{/if}
		</svg>
	</button>

	<ul
		bind:this={sliderEl}
		class:expanded
		style:translate={toPercent(panelDelta)}
		class:immediate={panelDelta !== 0}
	>
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
		user-select: none;
	}

	* {
		cursor: default;
	}

	svg {
		scale: 1.5;
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

	button {
		display: none;
		border: 0;
		background: none;
	}

	/* mobile */
	@media (max-width: 800px) {
		button {
			display: block;
			position: fixed;
			top: 3rem;
			right: 2rem;
			z-index: 2;
		}

		ul {
			position: fixed;
			will-change: transform;
			top: 0;
			right: 0;
			padding: 6rem 8% 8rem;
			height: 100dvh;
			background: color-mix(in srgb, var(--color), white 15%);
			z-index: 1;
			translate: 100% 0;
			box-shadow: -2px 0 12px rgba(0, 0, 0, 0.15);
		}

		ul.expanded {
			translate: 0 0;
		}

		a {
			font-size: 3.5rem;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		ul:not(.immediate) {
			transition: translate 0.3s cubic-bezier(0, 0.56, 0.32, 1);
		}
	}
</style>
