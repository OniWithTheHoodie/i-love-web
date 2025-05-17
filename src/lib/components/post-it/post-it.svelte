<script>
</script>

<div class="cards-wrapper">
	<section class="cards-section">
		<h2>Post-its</h2>
		<ul class="cards-container">
			<li class="card">
				<h2>Sprint 13 - Your tribe for life</h2>
				<p>
					Hier werk ik met een aantal klasgenoten om samen een squadpage te maken. Voor de squadpage
					maken wij een gezamelijke design dat linked naar onze huidige projectboard werk.
				</p>
				<a href="/sprint13">lees meer</a>
			</li>
			<li class="card">
				<h2>Sprint 14 - Lose your head</h2>
				<p>
					Dit gaat over onze nieuwe opdracht die wij hebben gekregen waar wij werken met een echte
					opdrachtgever. Voor het bedrijf Triple maken wij een radiogids
				</p>
				<a href="/sprint14">lees meer</a>
			</li>
			<li class="card">
				<h2>Sprint 15 - Choices, Choices</h2>
				<p>
					Experimenteren met verschillende tech stacks. Lose your head client case opnieuw maken
					maar met een andere framework. Ik had hiervoor Nuxt.js gekozen
				</p>
				<a href="/sprint15">lees meer</a>
			</li>
			<li class="card">
				<h2>Sprint 16 - Don't repeat yourself</h2>
				<p>
					Terug naar Sveltekit en het werken met componenten. Bij het werken met componenten leren
					wij verschillende manieren van werken met componeten die je kunt afspreken als team.
				</p>
				<a href="/sprint16">lees meer</a>
			</li>
			<li class="card">
				<h2>Sprint 17 - User needs</h2>
				<p>
					User needs kijken naar de must have en daar prioriteiten stellen. kijken naar de
					projectboard en alles in kaart brengen voor de oplevering
				</p>
				<a href="/sprint17">lees meer</a>
			</li>
			<li class="card">
				<h2>Sprint 18 - Release candidate</h2>
				<p>Hier leren we hoe we opdrachten kunnen leveren. Documenteren en het overhandigen</p>
				<a href="/sprint18">lees meer</a>
			</li>
		</ul>
	</section>
</div>

<style>
	.cards-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1em;
		border-top: 1px solid black;
		border-bottom: 1px solid black;

		@media (min-width: 480px) {
			z-index: 1;
			overflow: visible;
		}
	}

	.cards-section h2 {
		padding: 10px;
	}

	.cards-container {
		display: flex;
		flex-direction: column;
		gap: 1em;

		@media (min-width: 480px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			margin: 0 auto;
		}

		@media (min-width: 1080px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.card {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 1.5rem;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
		text-align: center;
		font-size: var(--M-font-size);
		background: var(--primary-color);
		height: 400px;
		width: 340px;
		border: 1px solid black;
		gap: 1em;
		position: relative;
		line-height: 1.4;

		@media (min-width: 480px) {
			z-index: 2;
			position: relative;
			transform: translateY(60px);
			display: absolute;
			top: -1.5em;
			font-size: var(--T-font-size);
		}

		@media (min-width: 1080px) {
			font-size: var(--D-font-size);
		}

		a {
			margin-top: auto;
			border: 1px solid black;
			padding: 0.5rem;
		}

		a:hover {
			background: #f5f5f5;
		}
	}
</style>
