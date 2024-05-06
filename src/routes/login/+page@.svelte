<script lang="ts">
	import { enhance } from '$app/forms';
	import TextLogo from '$lib/text-logo.svelte';

	export let form;
</script>

<main>
	<form use:enhance method="post">
		<TextLogo></TextLogo>

		<input type="text" name="code" value={form?.password ?? ''} placeholder="Codewort" required />
		{#if form?.hint}
			<p>
				<small>{form.hint}</small>
			</p>
		{/if}

		<input type="submit" hidden />
	</form>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		height: 100dvh;
		background-image: url('/logo.jpg');
		background-image: image-set(
			url('/logo.avif') type('image/avif'),
			url('/logo.webp') type('image/webp')
		);
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}

	form {
		display: flex;
		flex-flow: column nowrap;
		width: min(var(--column-width), 90vw);
		background: rgba(255, 255, 255, 0.6);
		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
	}

	input {
		padding: 0.5rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 0.25rem;
		box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);
	}

	input:focus,
	input:active {
		box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
		outline: none;
	}

	form:focus-within {
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
		outline: 1px solid var(--color-theme-1);
	}

	p {
		text-align: center;
		margin: 0.5rem;
		margin-top: 0;
		font-weight: bold;
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
		font-size: 1rem;
	}
</style>
