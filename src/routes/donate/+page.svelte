<script lang="ts">
	import { colorMap, getFontColor } from '$lib/colors';
	import { confettiAction } from 'svelte-legos';

	let amount = 0;

	const account = import.meta.env.VITE_PAYPAL_ACCOUNT;
	const colors = Array.from(colorMap.values());

	$: href = amount ? `https://paypal.me/${account}/${amount}EUR` : `https://paypal.me/${account}`;
</script>

<main>
	<header>
		<nav>
			<a href="/" id="home">Home</a>
		</nav>
	</header>

	<h1>
		<span id="title">
			<span>Sommer</span>
			<span>Resi</span>
			<span>Dance</span>
		</span>
	</h1>

	<p>
		{#if amount}
			<big>{amount}€</big>
		{:else}
			<big>...€</big>
		{/if}
	</p>

	<section>
		{#each [5, 10, 20, 50] as donation, i}
			<button
				class:selected={donation === amount}
				on:click={() => (amount = donation)}
				style:--color={colors[i]}
				style:--font={getFontColor(colors[i])}>
				{donation}€
			</button>
		{/each}
		<button
			use:confettiAction
			class:selected={80 === amount}
			style:--color={colors[4]}
			style:--font={getFontColor(colors[4])}
			on:click={() => (amount = 80)}>
			80€
		</button>
	</section>

	<a {href} target="_blank" id="donate" class:shine={!!amount}>Spenden</a>

	<small>über Paypal</small>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		height: 100dvh;
		position: relative;
	}

	main::after {
		content: '';
		position: absolute;
		inset: -20px;
		background-image: url('/donate.webp');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		filter: blur(10px) brightness(0.9);
		z-index: -1;
	}

	header {
		width: 100%;
		display: flex;
		padding: 20px;
	}

	a#home {
		text-decoration: overline;
		text-underline-offset: 5px;
		padding: 20px;
		color: white;
		font-weight: bold;
	}

	#title {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	h1 {
		font-weight: bold;
		padding: 0 8px;
		margin: 0;
		font-size: 3rem;
		color: white;
		text-align: center;
		font-weight: bold;
	}

	big {
		font-size: 70px;
		color: white;
		margin-left: 1ch;
		font-weight: bold;
	}

	button.selected {
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.123);
		transform: scale(1.1);
	}

	button {
		font-size: 20px;
		padding: 2em;
		border-radius: 5px;
		background: white;
		cursor: pointer;
		font-weight: bold;
		border: 0;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.021);
		color: var(--font);
		background: var(--color);
		transition: all 0.2s cubic-bezier(0.11, 0.7, 0.58, 1);
	}

	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}

	a#donate {
		background: #016afe;
		color: white;
		padding: 20px 50px;
		margin-top: 40px;
		border-radius: 25px;
		text-decoration: none;
		overflow: hidden;
		position: relative;
		font-weight: bold;
		box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.289);
	}

	a:not(.shine) {
		opacity: 0.6;
	}

	small {
		margin-top: 5px;
		opacity: 0.8;
		color: white;
	}

	a.shine:before {
		cursor: pointer;
		content: '';
		position: absolute;
		width: 100px;
		height: 100%;
		background-image: linear-gradient(
			120deg,
			rgba(255, 255, 255, 0) 30%,
			rgba(255, 255, 255, 0.8),
			rgba(255, 255, 255, 0) 70%
		);
		top: 0;
		left: -100px;
		animation: shine 2s infinite linear;
	}

	@keyframes shine {
		0% {
			left: -100px;
		}
		40% {
			left: 100%;
		}
		100% {
			left: 100%;
		}
	}
</style>
