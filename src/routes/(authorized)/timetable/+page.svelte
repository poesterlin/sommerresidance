<svelte:head><title>Timetable | SommerResiDance</title></svelte:head>
<h1>Timetable</h1>

<p>Coming soon!</p>

<style>
	h1 {
		margin-top: 0;
	}

	p {
		margin-top: 0;
		animation: rainbow 5s infinite;
		font-size: 8em;
		text-decoration: wavy underline;
		text-underline-offset: 0.3em;
	}

	@media (prefers-reduced-motion: reduce) {
		p {
			animation: none;
		}
	}

	@media screen and (max-width: 600px) {
		p {
			font-size: 5em;
		}
	}

	@keyframes rainbow {
		0% {
			text-decoration-color: red;
		}
		16% {
			text-decoration-color: orange;
		}
		33% {
			text-decoration-color: yellow;
		}
		50% {
			text-decoration-color: green;
		}
		66% {
			text-decoration-color: blue;
		}
		83% {
			text-decoration-color: indigo;
		}
		100% {
			text-decoration-color: violet;
		}
	}
</style>
