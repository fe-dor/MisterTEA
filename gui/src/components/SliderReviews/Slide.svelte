<script lang="ts">
	type Props = {
		text: string;
		photoNumber: number;
	};

	let { prop } = $props<Props>();

	function getPathReviews(a) {
		return '/src/assets/review' + a + '.webp';
	}
</script>

<main>
	<div class="slotReviews">
		<div style="display: flex; justify-content: center; align-items: center; margin-right: 10px;">
			<img
				style="width: 3.4em; height: 3.4em"
				src={getPathReviews(prop.photoNumber)}
				alt="Фото товара"
			/>
		</div>
		<div style="margin-left: 10px;">
			<p style="margin-top: 0; margin-bottom: 0">{prop.text}</p>
		</div>
	</div>
</main>

<style>
	.slotReviews {
		height: auto;

		display: flex;

		font-family: 'Montserat', sans-serif;
		font-weight: 400;
		font-size: 30px;
		color: #000;

		padding-bottom: 30px;
	}

	@media (min-width: 1700px) {
		.slotReviews {
			font-size: 40px;
		}
	}

	@media (max-width: 700px) {
		.slotReviews {
			font-size: 20px;
		}
	}

	@media (max-width: 500px) {
		.slotReviews {
			font-size: 15px;
		}
	}
</style>
