<script lang="ts">
	const workshops = [
		{
			header: 'Nageln auf dem Festival - gepflegte Fingernägel als Dosenöffner',
			content: {
				expect:
					'Wer kennt es nicht... Beim Öffnen des Dosenbiers abgerutscht, beim Moshpit langelegt, die Dosenravioli mal wieder ohne Besteck genossen, beim Kettenrauchen den Filter mehrfach ignoriert... Unästhetische Fingernägel sind die Folge! Wer dieser Ursache für das Nichtfinden neuer Freunde, die Ablehnung auf der Luftmatratzenkante, den sofortigen Rauswurf aus dem Festival und die Verachtung des eigenen Selbsts nun ein Schnippchen schlagen will, dem zeigen wir in ein paar einfachen Schritten wie er stattdessen seine Fingernägel zum adäquaten Accessoire aufhübschen kann. Wer nur am Lack schnüffeln will, ist auch herzlich willkommen!',
				trainer: 'Annika & Dieter',
				tools: 'gewaschene Hände und ein kühles Getränk',
				time: '',
				duration: '30 - 45 Minuten / Einstieg nur am Anfang möglich'
			}
		},
		{
			header: 'Wie man sich in einem Campingstuhl richtig besäuft und nichts tut!',
			content: {
				expect:
					'Die Elite bekommt Shisha (vlt. auch mehr) zum Rauchen, wird belehrt über ADaG (Advanced Drinking and Gaming) und zum Schluss sind alle sturzbesoffen.',
				trainer: 'Philip Pumba',
				tools: 'Campingstuhl und Alkohol',
				time: 'ab 11:00 Uhr',
				duration: 'flexibler Ein- und Ausstieg möglich'
			}
		},
		{
			header: 'SCHOCK DEINE MUDDA',
			content: {
				expect:
					'Verleihe deiner Haut ein temporäres Kunstwerk mit Designer-Tattoos auf Transferfolie. Fühl dich (kurz) cool und schocke deine Mutter. Ach übrigens: Wer sich das Hangover Tribal ins Gesicht tätowieren lässt, bekommt eine Überraschung.',
				trainer: 'Lea',
				time: 'geh einfach zu Lea und du bekommst dein Tattoo',
				duration: 'geh einfach zu Lea und du bekommst dein Tattoo'
			}
		},
		{
			header: 'Uh Baby, swing dein Teil!',
			content: {
				expect: 'Tanzworkshop West Coast Swing',
				trainer: 'Laura und Peter',
				tools: 'Bitte als Tanzpaar kommen, Gender-Konstellation egal - hauptsache Spaß am Tanzen',
				duration: '90 Minuten / Einstieg nur am Anfang möglich'
			}
		},
		{
			header: 'Bohren und Blasen',
			content: {
				expect: 'Wir basteln Flöten aus Karotten. Pflichttermin für alle, die ihre Blockflöte vergessen haben ;)',
				trainer: 'Tina, Sascha und Fabi',
				duration: 'flexibler Ein- und Ausstieg möglich'
			}
		}
	];
</script>

<svelte:head><title>Workshops | SommerResiDance</title></svelte:head>

<h1>Workshops</h1>

<ul>
	<li>Du kannst irgendwas besonders gut?</li>
	<li>Du kannst irgendwas gar nicht, möchtest es aber gerne lernen?</li>
	<li>Du spielst gern ein bestimmtes Spiel?</li>
	<li>Du machst gern Dinge zusammen mit anderen Menschen?</li>
</ul>

<p>Sei kreativ :)</p>
<p>
	Wende dich mit deiner Workshop Idee an uns - wir freuen uns auf ein breit aufgestelltes Angebot an wilden, witzigen,
	tollen Aktivitäten, bei denen jeder mitmachen darf.
</p>

<p>Juhuu, wir haben die besten Freund*innen. Dieses MEGA Angebot an Workshops wird es bei der SOMMERRESIdance geben:</p>

{#each workshops as workshop}
	<table>
		<tr>
			<th colspan="2">
				{workshop.header}
			</th>
		</tr>
		<tr>
			<td>Das erwartet dich:</td>
			<td>
				{workshop.content.expect}
			</td>
		</tr>
		<tr>
			<td>Deine Trainer*innen::</td>
			<td>
				{workshop.content.trainer}
			</td>
		</tr>

		{#if workshop.content.tools}
			<tr>
				<td>Bitte mitbringen:</td>
				<td>
					{workshop.content.tools}
				</td>
			</tr>
		{/if}

		{#if workshop.content.time}
			<tr>
				<td>Zeit & Ort:</td>
				<td>
					{workshop.content.time}
				</td>
			</tr>
		{/if}

		<tr>
			<td>Dauer:</td>
			<td>
				{workshop.content.duration}
			</td>
		</tr>
	</table>
{/each}

<style>
	ul {
		padding-inline-start: 0;
		list-style-type: none;
	}

	li {
		margin-bottom: 0.3rem;
	}
</style>
