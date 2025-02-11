<script>
</script>

<article class="stack">
	<h1>Digital Gardening</h1>
	<p>Welcome to my digital Gardening.</p>
	<ul class="stack-cards">
		<li class="stack-cards__item">
			<article class="stack-cards__article">
				<h2>Sprint 13</h2>
				<p>Your tribe for life</p>
				<a href="/sprint13">lees meer</a>
			</article>
			<figure>
				<img src="images/code.jpg" width="100" alt="right" />
			</figure>
		</li>

		<li class="stack-cards__item">
			<article class="stack-cards__article">
				<h2>Sprint 14</h2>
				<p>Lose your head</p>
				<a href="/sprint14">lees meer</a>
			</article>
			<figure>
				<img src="images/code.jpg" width="100" alt="right" />
			</figure>
		</li>

		<li class="stack-cards__item">
			<article class="stack-cards__article">
				<h2>Sprint 15</h2>
				<p>Choices, Choices</p>
				<a href="/sprint15">lees meer</a>
			</article>
			<figure>
				<img src="images/code.jpg" width="100" alt="right" />
			</figure>
		</li>

		<li class="stack-cards__item">
			<article class="stack-cards__article">
				<h2>Sprint 16</h2>
				<p>Don't repeat yourself</p>
				<a href="/sprint16">lees meer</a>
			</article>
			<figure>
				<img src="images/code.jpg" width="100" alt="right" />
			</figure>
		</li>

		<li class="stack-cards__item">
			<article class="stack-cards__article">
				<h2>Sprint 17</h2>
				<p>User needs</p>
				<a href="/sprint17">lees meer</a>
			</article>
			<figure>
				<img src="images/code.jpg" width="100" alt="right" />
			</figure>
		</li>

		<li class="stack-cards__item">
			<article class="stack-cards__article">
				<h2>Sprint 18</h2>
				<p>Release candidate</p>
				<a href="/sprint18">lees meer</a>
			</article>
			<figure>
				<img src="images/code.jpg" width="100" alt="right" />
			</figure>
		</li>

		<li class="stack-cards__item">
			<article class="stack-cards__article">
				<h2>We love web</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus?</p>
				<a href="/WeLoveWeb">lees meer</a>
			</article>
			<figure>
				<img src="images/code.jpg" width="100" alt="right" />
			</figure>
		</li>
	</ul>
</article>

<style>
	.stack {
		/* @media screen and (min-width: 768px) {
			display: flex;
			flex-direction: column;
			align-items: center;	
		} */
	}

	article > h1,
	p {
		margin-bottom: 0.5em;
	}

	.stack-cards {
		list-style: none;
		padding: 0;
		margin: 0;
		position: relative;
		height: 400vh; /* Ensure enough height for scrolling */
		
		@media (min-width: 768px) {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.stack-cards__item {
		background-color: white; /* Background color for visibility */
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow for better visibility */
		border-radius: 8px; /* Rounded corners */
		margin-bottom: 20px; /* Add some space between cards */
		width: 100%;
		height: 190px;
		position: sticky;
		top: 0;
		z-index: 1;
		transition: transform 0.3s ease-out;
		display: flex;
		flex-direction: row;
		container-type: inline-size;

		@media (min-width: 768px) {
			width: 500px;
		}

		& .stack-cards__article {
			width: 100%;
			max-height: 200px;
			padding: 20px;
		}

		& .stack-cards__article > h2 {
			font-size: 18px;
			height: 30px;
		}

		& .stack-cards__article > p {
			height: 65px;
			font-size: var(--M-font-size);
			
			@container (min-width: 700px) {
				font-size: var(--T--font-size);	
			}

			@container (min-width: 1000px) {
				font-size: var(--D-font-size);
			}
		}

		& .stack-cards__article > a {
			height: 100px;
			font-size: 14px;
			width: auto;
			height: 24px;
			border-radius: 5px;
			background: var(--secondary-color);
			padding: 10px;
			color: var(--text-color);
			text-decoration: none;
			box-shadow: 2px 2px;
			transition:
				transform 1s ease,
				box-shadow 0.1s ease;
		}

		& a:hover {
			background-color: var(--tertiary-color);
		}

		& a:active {
			transform: scale(0.95);
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		}

		& figure {
			width: 100%;
			height: 190px;
			object-fit: cover;
		}

		& figure > img {
			height: 100%;
			width: 100%;
			border-radius: 0 5px 5px 0;
		}
	}

	.stack-cards__item:nth-child(1) {
		z-index: 1;
	}

	.stack-cards__item:nth-child(2) {
		z-index: 2;
	}

	.stack-cards__item:nth-child(3) {
		z-index: 3;
	}

	.stack-cards__item:nth-child(4) {
		z-index: 4;
	}

	.stack-cards__item:nth-child(5) {
		z-index: 5;
	}

	.stack-cards__item:nth-child(6) {
		z-index: 6;
	}
</style>
