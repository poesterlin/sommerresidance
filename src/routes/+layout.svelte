<script lang="ts">
	import { browser, dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import './styles.css';

	const images = import.meta.glob('$lib/assets/egg/*.png', { eager: true, query: { enhanced: true, w: 320 } });

	// randomize the order of the images
	const imageKeys = Object.keys(images);

	let imageIndex = 0;
	let show = false;

	onMount(() => {
		const time = dev ? 10_000 : 30_000;
		const interval = setInterval(() => {
			imageIndex = (imageIndex + 1) % imageKeys.length;
			show = !show;

			setTimeout(() => {
				show = !show;
			}, 1000);
		}, time);

		return () => clearInterval(interval);
	});

	function getImage(index: number) {
		const path = imageKeys[index];
		const { default: img } = images[path] as { default: string };
		return img;
	}

	afterNavigate(() => {
		if (browser) {
			window.scrollTo(0, 0);
		}
	});
</script>

<slot />

{#if show}
	{@const isEven = imageIndex < 3}
	{@const isOdd = !isEven}
	{@const sign = isEven ? -1 : 1}
	{@const randomHeight = Math.floor(Math.random() * 100)}
	<div
		id="easteregg"
		class:left={isEven}
		class:right={isOdd}
		style:--height={randomHeight}
		transition:fly={{ duration: 500, x: 300 * sign }}>
		<enhanced:img src={getImage(imageIndex)} alt="Easter egg" />
	</div>
{/if}

<style>
	:global(body) {
		background-color: white;
	}

	#easteregg {
		position: fixed;
		top: calc(var(--height) * 1svh);
	}

	.left {
		left: 0;
	}

	.right {
		right: 0px;
	}

	img {
		width: min(20vw, 100px);
		height: auto;
	}
</style>
