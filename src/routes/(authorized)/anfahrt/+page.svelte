<script lang="ts">
	import LagePlanRaw from '$lib/assets/lageplan.png?url';
	import Lageplan from '$lib/assets/lageplan.png?enhanced';
	import { copyable } from '$lib/copy';
</script>

<svelte:head><title>Anfahrt | SommerResiDance</title></svelte:head>

<h1>Anfahrt</h1>

<p>
	Die Adresse ist: <br />
	<b use:copyable>
		Hauptstraße 45, <br />
		87787 Wolfertschwenden
	</b>
</p>

<p>
	Einfach beliebige App oder Kompass nutzen. Das Haus zwischen Tankstelle und Bäcker ist das richtige. Unten findet ihr
	weitere Infos zur Anfahrt.
</p>

<p>
	Damit ihr euch direkt auf der SOMMERRESIdance zurechtfindet, schaut auf den Lageplan:
	<a href={LagePlanRaw} target="_blank" rel="noopener noreferrer">
		<enhanced:img src={Lageplan} alt="Lageplan"></enhanced:img>
	</a>
</p>
<br />
<h3>Details zur Anfahrt:</h3>
<ul>
	<li>
		<b>Mit dem Auto:</b>
		Vor Ort haben wir eine große Parkfläche, direkt gegenüber der Hauptstraße 45 (siehe Lageplan). Diese wird gut ausgeschildert
		sein. Bitte parkt dort platzsparend, damit möglichst viele Autos hinpassen. Parkmöglichkeiten gibt es bei gutem Wetter
		auch direkt auf dem Campinggelände. Wir weisen euch ein Plätzchen zu - Kein Stress bei der Anfahrt - wir haben Platz
		für alle.
		<em>
			Sollte der Parkplatz voll sein, ladet vor Ort euer Zeug aus und parkt dann bitte bei der Festhalle
			Wolfertschwenden (Am Sportplatz 9, 87787 Wolfertschwenden). Von dort sind es 3 Minuten Fußweg bis zum Festival.
		</em>
	</li>
	<li>
		<b>Mit dem Zug:</b>
		Fahrt zur Station Bahnhof Bad Grönenbach (ca. 2km vom Festival entfernt). Wer möchte, kann von dort zum Festival laufen
		;) Da ihr aber vermutlich viel Gepäck dabei habt, werden wir für euch ein Shuttle organisieren, wenn ihr euch vorab bei
		uns meldet.
	</li>
	<li>
		<b>Zu Fuß oder mit dem Fahrrad:</b>
		Eine Anreise zu Fuß oder mit dem Fahrrad ist auch möglich. Beachtet hierbei bitte eure Reisezeit.
	</li>
	<li>
		<b>Fahrgemeinschaften:</b>
		Du kommst von weiter weg und hast hart kein Bock auf die Deutsche Bahn? Du fährst selber mit dem Auto und hast noch Platz
		frei und Lust auf gute Unterhaltung mit netten Leuten? Dann könnt ihr Fahrgemeinschaften bilden. Es kommen bspw. einige
		Leute aus Hamburg, Stuttgart, Konstanz, Augsburg, München. Melde dich einfach bei uns. Wir können euch eventuell connecten.
		Spritgeld und Fahrer*innen-Getränk nach Wahl dürft ihr selber ausmachen. Alle Menschen, die mit leerem Auto anreisen,
		müssen zur Strafe eine Person vom Bahnhof abholen und anschließend mit Hedwig einen Vodka Brause trinken.
	</li>
</ul>

<style>
	img {
		width: 100%;
		height: auto;
	}

	ul {
		padding-inline-start: 0;
		list-style-type: none;
	}

	li {
		margin-bottom: 2.5rem;
	}
</style>
