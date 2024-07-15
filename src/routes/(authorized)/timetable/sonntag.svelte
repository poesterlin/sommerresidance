<header>
	<h2>SONNTAG</h2>
	<h3>frühschoppen</h3>
</header>

<em>allgemein</em>
<div class="table-wrapper">
	<table>
		<tr>
			<td>10.00-10.20</td>
			<td>Yoga mit Meli</td>
		</tr>
		<tr>
			<td>Vormittag</td>
			<td>
				Frühschoppen, <br />
				Blockflötenkonzert
			</td>
		</tr>
	</table>
</div>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h2,
	h3 {
		text-align: center;
		font-size: 5rem;
		margin: 0 auto;
		padding: 0;
		display: inline;
		font-weight: normal;
	}

	h2 {
		background: var(--col);
		letter-spacing: 1rem;
	}

	h3 {
		letter-spacing: 0.5rem;
		font-size: 3rem;
	}

	em {
		font-style: normal;
		font-size: 1.5rem;
		letter-spacing: 0.5rem;
		margin: 1rem;
		margin-top: 2rem;
		display: block;
	}

	.table-wrapper {
		padding: 0 1rem;
		width: 100%;
		border: 3px solid var(--col);
	}

	table {
		margin: 0 auto;
		width: 100%;
		padding: 1rem;
		border-collapse: collapse;
	}

	tr:not(:last-child) {
		border-bottom: 1px solid white;
	}

	td {
		padding: 1rem;
	}

	td:first-child {
		text-align: center;
	}

	td:last-child {
		letter-spacing: 0.2rem;
	}

	@container main (max-width: 600px) {
		h2 {
			font-size: 3rem;
			padding-left: 1ch;
		}

		h3 {
			font-size: 2rem;
		}

		div.table-wrapper {
			padding: 0;
		}

		td {
			padding: 0.5rem;
		}
		section {
			border: 1rem solid var(--col);
			padding: 0.5rem;
		}
	}

	@container main (max-width: 400px) {
		h2 {
			font-size: 2rem;
		}

		h3 {
			font-size: 1.5rem;
		}
	}
</style>
