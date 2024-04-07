<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;
</script>

<main>
	<h1>Login mit geheimen Codewort:</h1>
	<form use:enhance method="post">
		<input type="text" name="password" value={form?.password ?? ''} placeholder="Codewort" required />

        <p>
            {#if form?.hint}
                <small>{form.hint}</small>
            {/if}
        </p>

		<button type="submit">Login</button>
	</form>
</main>
