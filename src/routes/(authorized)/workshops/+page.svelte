<script lang="ts">
	import WorkshopImg from '$lib/assets/workshop.jpg?enhanced';
	import WorkshopImgRaw from '$lib/assets/workshop.jpg?url';

	import ActiveImg from '$lib/assets/active.webp?url';

	console.log(ActiveImg);

	const friday = '2024-07-26';
	const saturday = '2024-07-27';

	const workshops = [
		{
			header: 'Swipe less, date more',
			content: {
				expect:
					'Frisch auf dem Festival angekommen und Bock auf Speeddating / Friendsdating / Socialising? Dann bist du hier richtig! Keinen Bock da drauf? Dann solltest du MOF umso mehr diesen Workshop besuchen. Keine (Dating-)Skills nötig! Wir führen dich durch.',
				trainer: 'Sophie',
				tools: 'Campingstuhl',
				time: 'FR nachmittags | Jelly Hood',
				duration: '60 Minuten | Einstieg nur am Anfang möglich',
				date: friday + 'T10:00:00',
				minutes: 60
			}
		},
		{
			header: 'YOGA',
			content: {
				expect:
					'Komm zur Yoga-Session auf dem Festivalgelände. Streck dich aus, atme tief ein, trotze dem Kater und finde dein inneres Gleichgewicht (wieder). Namasté und Prost!',
				trainer: 'Julia B. & Meli',
				tools: 'Yogamatte falls vorhanden',
				time: 'SA 10:00 | Main Field',
				duration: '20 Minuten | Einstieg flexibel möglich',
				date: saturday + 'T10:00:00',
				minutes: 20
			}
		},
		{
			header: 'Erst saven, dann raven',
			content: {
				expect: 'Erste Hilfe im Allgemeinen und im Festivalsetting',
				trainer: 'Dani',
				tools: 'Campingdecke oder -stuhl, um es dir bequem zu machen',
				time: 'SA 11:00 | Jelly Hood',
				duration: '45 - 60 Minuten | Einstieg nur am Anfang möglich',
				date: saturday + 'T11:00:00',
				minutes: 60
			}
		},
		{
			header: 'Bunte Batik',
			content: {
				expect: 'Farbenfrohe Festivalshirts & Co. batiken.',
				trainer: 'Sophia',
				tools: 'Das, was du Batiken möchtest: z. B. T-Shirt, Beutel, Socken, Tuch,...',
				time: 'SA 11:00 - 13:00 Uhr | Night Park',
				duration: 'ca. 60 Minuten | Einstieg flexibel möglich',
				date: saturday + 'T11:00:00',
				minutes: 120
			}
		},
		{
			header: 'Tauchgang ins Unterbewusstsein',
			content: {
				expect:
					'Komm auf den heißen Stuhl und erfahre mehr über deine Zukunft, deine Vergangenheit und dein wahres ICH. “Subber Steffi” - die schwäbische Wahrsagerin - erwartet dich!',
				trainer: 'Julia G.',
				tools: 'Du musst nichts mitbringen, Subber Steffi weiß schon alles über dich ;)',
				time: 'SA 11:00 - 13:00 Uhr | Wooden Cage',
				duration: 'ca 10 Minuten pro Person | Einstieg flexibel möglich',
				date: saturday + 'T11:00:00',
				minutes: 120
			}
		},
		{
			header: 'Bohren und Blasen',
			content: {
				expect: 'Wir basteln Flöten aus Karotten. Pflichttermin für alle, die ihre Blockflöte vergessen haben ;)',
				trainer: 'Tina, Sascha und Fabi',
				tools: '/',
				time: 'SA 11:00 Uhr - 15:00 Uhr | Main Field',
				duration: '10 Minuten | Einstieg flexibel möglich',
				date: saturday + 'T11:00:00',
				minutes: 240
			}
		},
		{
			header: "Ballin' mit Bierchen",
			content: {
				expect:
					"Dir ist Volleyball zu kompliziert? Dann probier's doch mal mit SpikeBall - dem “Volleyball für Doofe”. SpikeBall macht enorm viel Spaß und wird auch von intelligenten Menschen sehr gerne gespielt. Also schau vorbei! Hier findet entspanntes SpikeBall spielen statt, solange es genug motivierte Spieler*innen gibt.",
				trainer: 'Pit',
				tools: '/',
				time: 'SA ab 11:00 | Volleyballfeld',
				duration: 'solange man möchte | Einstieg flexibel möglich',
				date: saturday + 'T11:00:00',
				minutes: 240
			}
		},
		{
			header: 'Stolpern mit Stil',
			content: {
				expect: 'Tanzworkshop Bachata Sensual Partnerwork',
				trainer: 'Jonas K.',
				tools:
					'Bitte als Tanzpaar kommen, je nach Konstellation entscheiden, ob man als Lead oder Follow tanzen möchte',
				time: 'SA 12:00 Uhr | Jelly Hood',
				duration: '60 Minuten | Einstieg nur am Anfang möglich',
				date: saturday + 'T12:00:00',
				minutes: 60
			}
		},
		{
			header: 'Uh Baby, swing dein Teil!',
			content: {
				expect: 'Tanzworkshop West Coast Swing',
				trainer: 'Laura und Peter',
				tools: 'Bitte als Tanzpaar kommen, Gender-Konstellation egal - hauptsache Spaß am Tanzen',
				duration: '90 Minuten | Einstieg nur am Anfang möglich',
				time: 'SA 13:00 Uhr | Jelly Hood',
				date: saturday + 'T13:00:00',
				minutes: 90
			}
		},
		{
			header: 'Nageln auf dem Festival - gepflegte Fingernägel als Dosenöffner',
			content: {
				expect:
					'Wer kennt es nicht... Beim Öffnen des Dosenbiers abgerutscht, beim Moshpit langelegt, die Dosenravioli mal wieder ohne Besteck genossen, beim Kettenrauchen den Filter mehrfach ignoriert... Unästhetische Fingernägel sind die Folge! Wer dieser Ursache für das Nichtfinden neuer Freunde, die Ablehnung auf der Luftmatratzenkante, den sofortigen Rauswurf aus dem Festival und die Verachtung des eigenen Selbsts nun ein Schnippchen schlagen will, dem zeigen wir in ein paar einfachen Schritten wie er stattdessen seine Fingernägel zum adäquaten Accessoire aufhübschen kann. Wer nur am Lack schnüffeln will, ist auch herzlich willkommen!',
				trainer: 'Annika & Dieter',
				tools: 'gewaschene Hände und ein kühles Getränk',
				time: 'SA 13:00 Uhr | Night Park',
				duration: '30 - 45 Minuten | Einstieg nur am Anfang möglich',
				date: saturday + 'T13:00:00',
				minutes: 45
			}
		},
		{
			header: "Stitch'n Style",
			content: {
				expect: 'Make your own Merch! Pimp dein T-Shirt, deine Cap oder sonstige Klamotte mit einer kleinen Stickerei.',
				trainer: 'Sonja',
				tools: 'T-Shirt, Cap oder andere Klamotte; wer hat: kleiner Stickrahmen',
				time: 'SA 14:00 - 16:00 Uhr | Night Park',
				duration: 'ca. 60 Minuten | Einstieg flexibel möglich',
				date: saturday + 'T14:00:00',
				minutes: 120
			}
		},
		{
			header: 'Ballern & Baggern',
			content: {
				expect:
					"Egal ob Profi oder Noob - beim Volleyballturnier ist jede*r willkommen. Mit Musik im Hintergrund und guter Laune in der Luft wird jeder Satz zum Party-Highlight. Pack deine Sonnencreme und ein kühles Getränk ein und los geht's - es ist Zeit für Baggern und Ballern auf dem Volleyballfeld.",
				trainer: 'Marina, Alex, Sarah & Nele',
				tools: '/',
				time: 'SA 14:00 Uhr - 16:00 Uhr | Volleyballfeld',
				duration: 'Turnier | Einstieg nur am Anfang möglich',
				date: saturday + 'T14:00:00',
				minutes: 120
			}
		},
		{
			header: 'Hüftschwung und Heiterkeit',
			content: {
				expect: 'Twerkshop - alle Bootys willkommen.',
				trainer: 'Cecilia',
				tools: 'Lockere Kleidung und gute Laune',
				time: 'SA 15:00 Uhr | Jelly Hood',
				duration: '45 Minuten | Einstieg flexibel möglich',
				date: saturday + 'T15:00:00',
				minutes: 45
			}
		},
		{
			header: 'Lecker Bierchen',
			content: {
				expect:
					'Du bist Bierkenner*in oder trinkst einfach nur gerne? Dann sei dabei beim Biertasting: Wir klären ein für alle mal, welches Bier das beste ist!',
				trainer: 'Jonas G. & Philipp',
				tools: 'Becher, Campingstuhl',
				time: 'SA 15:00 Uhr | Main Field',
				duration: '60 Minuten | Einstieg nur am Anfang möglich',
				date: saturday + 'T15:00:00',
				minutes: 60
			}
		},
		{
			header: 'Wie man sich in einem Campingstuhl richtig besäuft und nichts tut!',
			content: {
				expect:
					'Die Elite bekommt Shisha (vlt. auch mehr) zum Rauchen, wird belehrt über ADaG (Advanced Drinking and Gaming) und zum Schluss sind alle sturzbesoffen.',
				trainer: 'Philip Pumba',
				tools: 'Campingstuhl und Alkohol',
				time: 'SA ab 11:00 Uhr | da, wo Philip ist',
				duration: 'solange man möchte | Einstieg flexibel möglich',
				date: saturday + 'T11:00:00',
				minutes: 480
			}
		},
		{
			header: 'SCHOCK DEINE MUDDA',
			content: {
				expect:
					'Verleihe deiner Haut ein temporäres Kunstwerk mit Designer-Tattoos auf Transferfolie. Fühl dich (kurz) cool und schocke deine Mutter. Ach übrigens: Wer sich das Hangover Tribal ins Gesicht tätowieren lässt, bekommt eine Überraschung.',
				trainer: 'Lea',
				tools: '/',
				time: 'SA ab 11:00 Uhr | da, wo Lea ist',
				duration: '5 Minuten | Einstieg flexibel möglich',
				date: saturday + 'T11:00:00',
				minutes: 480
			}
		}
	] satisfies Workshop[];

	interface Workshop {
		header: string;
		content: {
			expect: string;
			trainer: string;
			tools: string;
			time: string;
			duration: string;
			date: string;
			minutes: number;
		};
	}

	function currentlyRunning(workshop: Workshop) {
		const now = new Date();
		const workshopStart = new Date(workshop.content.date);
		const workshopEnd = new Date(workshop.content.date);
		workshopEnd.setMinutes(workshopEnd.getMinutes() + workshop.content.minutes);

		return now >= workshopStart && now <= workshopEnd;
	}

	function isOver(workshop: Workshop) {
		const now = new Date();
		const workshopEnd = new Date(workshop.content.date);
		workshopEnd.setMinutes(workshopEnd.getMinutes() + workshop.content.minutes);

		return now > workshopEnd;
	}
</script>

<svelte:head><title>Workshops | SommerResiDance</title></svelte:head>

<h1>Workshops</h1>

<p>
	Juhuu, dieses MEGA Angebot an Workshops wird es bei der SOMMERRESIdance geben
	<br />
	(Details zu den Workshops findet ihr unter dem Plan):
</p>

<a href={WorkshopImgRaw} target="_blank" rel="noopener noreferrer">
	<enhanced:img src={WorkshopImg} alt="Workshop Plan"></enhanced:img>
</a>

<p>
	Änderungen insbesondere bzgl. Ort und Uhrzeit sind möglich.
	<br />
	Weitere Infos gibt's vor Ort auf der SOMMERRESIdance und in der Whatsapp Gruppe. Es ist keine Anmeldung zu einem Workshop
	nötig. Manche Workshops haben aber eine Begrenzung der Teilnahmezahl - dann gilt: Wer zuerst kommt, mahlt zuerst.
</p>

{#each workshops as workshop}
	<table style:--bg="url({ActiveImg})" class:is-over={isOver(workshop)}>
		<tr>
			<th colspan="2" class:running={currentlyRunning(workshop)}>
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
			<td>Deine Trainer*innen:</td>
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
	img {
		width: 100%;
		height: auto;
	}

	table {
		width: 100%;
		margin: 3rem 0;
		border-collapse: collapse;
	}

	.is-over {
		opacity: 0.5;
	}

	.running {
		color: #75c5bd;
	}

	.running::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image: var(--bg);
		z-index: 1;
		mix-blend-mode: difference;
		opacity: 0.65;
	}

	th {
		color: white;
		text-align: left;
		font-size: 2rem;
		position: relative;
	}

	th,
	td {
		padding: 0.5rem;
		vertical-align: top;
		letter-spacing: 0.3px;
	}

	td:first-child {
		font-weight: bold;
		letter-spacing: normal;
	}

	@media (min-width: 600px) {
		td:first-child {
			width: 22ch;
		}
	}

	tr:not(:last-child) {
		border-bottom: 1px solid white;
	}
</style>
