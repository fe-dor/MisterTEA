<link rel="stylesheet" href="../../app.scss">
<script lang="ts">
	import ky from 'ky';
	import { goto } from '$app/navigation';
	import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/[type=teaType]/[id]/$types';

	let { data } = $props<PageServerLoad>();

	async function addToCart() {
		try {
			await ky
				.post(`cart/${data.type}/${data.item._id}/1`, {
					prefixUrl: import.meta.env.VITE_API_HOST,
					credentials: "include"
				})
				.json()
			await goto('/cart')
		} catch (e: Exception) {
			await ky
				.post('create_cart', {
					prefixUrl: import.meta.env.VITE_API_HOST,
					credentials: "include"
				})
				.json()
			await addToCart()
		}
	}
</script>


<title>{data.item.name}</title>
{#if data.item}
	<div class="content">
		<p class="head">{data.item.name}</p>
		<div class="block">
			<p class="description">{data.item.description}</p>
			<div class="price">
				<p>Цена: {data.item.price}</p>
				<button onclick={addToCart}>
					В корзину
				</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	p {
		all: unset;
	}

	button {
    all: unset;
		background-color: #543019;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
		text-align: center;
	}

	button:hover {
		opacity: 0.8;
	}

  button:active {
    opacity: 1;
  }

	.content {
		display: flex;
		flex-direction: column;
		min-height: 50vh;
    padding: 170px 100px;
  }

	.head {
		padding-bottom: 100px;

    font-family: "Prosto One", sans-serif;
    font-size: 40px;
    color: #27160E;
		text-align: center;
	}

  .block {
		display: flex;
    justify-content: space-between;
		font-family: 'Montserat', sans-serif;
	}

	.description {
		font-size: 20px;
		min-width: 500px;
		max-width: 1000px;
		margin-right: 20px;
	}

	.price {
		display: flex;
		flex-direction: column;
		justify-content: center;
		row-gap: 10px;
	}

	@media (max-width: 1050px) {
    .content {
      padding: 170px 50px;
    }

		.head {
      padding-bottom: 70px;
      font-size: 30px;
    }

    .description {
      font-size: 15px;
      min-width: 200px;
			margin-right: 0;
			margin-bottom: 50px;
		}

    .block {
      flex-direction: column;
      justify-content: center;
			align-items: center;
    }

    .price {
			align-content: center;
			width: 100%;
    }
	}

  @media (max-width: 1050px) {
    .content {
      padding: 100px 30px;
    }

    .head {
      padding-bottom: 70px;
      font-size: 30px;
    }

    .description {
      font-size: 15px;
      min-width: 200px;
      margin-right: 0;
      margin-bottom: 50px;
    }

    .block {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .price {
      align-content: center;
      width: 100%;
    }
  }

</style>
