<script>
	import Freitag from './freitag.svelte';
	import Samstag from './samstag.svelte';
	import Sonntag from './sonntag.svelte';
</script>

<svelte:head><title>Timetable | SommerResiDance</title></svelte:head>

<div>
	<Freitag --col="#f4900b"></Freitag>
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />

	<Samstag --col="#79c4bd"></Samstag>
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />

	<Sonntag --col="#e6471d"></Sonntag>
</div>

<style>
	div {
		container: main / inline-size;
	}
</style>
