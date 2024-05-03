<script lang="ts">
	type Props = {
		sale: string;
		text: string;
		photoNumber: number;
		url: string
	};

	let { prop } = $props<Props>();

	function getPathSales(a) {
		return '/src/assets/sales' + a + '.png';
	}
</script>

<a href={prop.url}>
	<div class="slotSales">
		<div
			style="margin-left: 1.5em; margin-bottom: 1.2em; margin-top: 1.2em; display: flex; flex-direction: column; justify-content: center"
		>
			<p style="font-size: 1.7em; color:#FFB422; margin: 0">{prop.sale}</p>
			<p style="margin: 0">{prop.text}</p>
		</div>
		<div style="margin-top: auto; margin-bottom: auto; margin-left: auto; margin-right: 0.3em">
			<img style="width: 6.6em" src={getPathSales(prop.photoNumber)} alt="Фото товара" />
		</div>
	</div>
</a>

<style>
	.slotSales {
		height: 8.3em;
		margin-right: 30px;
		display: flex;

		font-family: 'Prosto One', sans-serif;
		font-weight: 400;
		font-size: 35px;
		text-transform: capitalize;
		color: #fff;

		background-image: url('/src/assets/waves.png');
		background-size: 100%;
		background-color: #d7a84e;
		border-radius: 20px;

		cursor: pointer;
	}

	a {
		all: unset;
	}

	a:hover {
		opacity: 0.8;
	}

  a:active {
		opacity: 1;
  }

	@media (max-width: 1150px) {
		.slotSales {
			font-size: 28px;
		}
	}

	@media (max-width: 900px) {
		.slotSales {
			font-size: 23px;
		}
	}

	@media (max-width: 700px) {
		.slotSales {
			font-size: 18px;
		}
	}

	@media (max-width: 550px) {
		.slotSales {
			font-size: 14px;
		}
	}

	@media (max-width: 400px) {
		.slotSales {
			font-size: 10px;
		}
	}

	@media (max-width: 300px) {
		.slotSales {
			font-size: 9px;
		}
	}
</style>
