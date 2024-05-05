<script lang="ts">
	import Review1 from '$assets/review1.webp'
	import Review2 from '$assets/review2.webp'
	import Review3 from '$assets/review3.webp'
	import Review4 from '$assets/review4.webp'


	type Props = {
		text: string;
		photoNumber: number;
	};

	let { prop } = $props<Props>();

	function getPathReviews(num: number) {
		switch (num) {
			case 1: return Review1
			case 2: return Review2
			case 3: return Review3
			default: return Review4
		}
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
