<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import './styles.css';

	afterNavigate(() => {
		if (browser) {
			window.scrollTo(0, 0);
		}
	});
</script>

<slot />

<style>
	:global(body) {
		background-color: white;
	}
</style>
