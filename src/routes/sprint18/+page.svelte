<div>
	<ul>
		<h1>Dave Bitter</h1>
		<li>Dave Bitter werkt voor IO binnen de Digital Agency.</li>
		<li>
			Hij had zijn eerste app gemaakt genaamd Presiarrot, die aan de hand van zijn stem nieuwe
			kaarten aanmaakt. Zijn stem wordt vertaald naar tekst.
		</li>
		<li>In 1950 was het de eerste keer dat voice recognition werd uitgeprobeerd.</li>
		<li>In 1990 kwam er een programma dat het voor elkaar kreeg.</li>
		<li>In 2000 maakte Google er een feature van.</li>
		<li>Nu kun je transcripties genereren.</li>
		<li>
			Hij heeft binnen het IO-bedrijf een AI gemaakt, gebaseerd op stem, genaamd Aiva. Hij gebruikt
			hiervoor een Speech API en maakt ook connectie met ChatGPT AI, die de vragen en antwoorden
			genereert en vervolgens naar Aiva doorstuurt.
		</li>
		<li>
			Bij het maken van de AI heeft hij problemen gehad met latency. Hij vond een oplossing door
			alle audio vooraf te fetchen en af te spelen. Terwijl de eerste audio wordt afgespeeld, wordt
			de tweede audio alvast gefetched en in de wachtrij gezet. Zodra de eerste audio klaar is,
			volgt de tweede audio, enzovoort. Hierdoor verloopt de voice speech in de Aiva AI vloeiender.
		</li>
	</ul>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		margin-bottom: 1em;
	}

	ul {
		padding: 40px;
		border-radius: 1em;
		background-color: white;
		width: 100%;
	}

	li {
		margin-bottom: 1em;
		line-height: 1.6;
	}
</style>