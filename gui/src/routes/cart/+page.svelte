<script lang="ts">
	import type { PageLoad } from '../../../.svelte-kit/types/src/routes/cart/$types';
	import FormPurchase from '../../components/FormPurchase/FormPurchase.svelte';
	import { invalidateAll } from '$app/navigation';
	import ky from 'ky';
	import { wait } from '$lib/wait';


	let { data } = $props<PageLoad>();

	async function deleteItem(id: string) {
		await ky.put(`cart/${id}`, {
			prefixUrl: import.meta.env.VITE_API_HOST,
			credentials: "include"
		});
		await invalidateAll()
	}
</script>

<title>Корзина {data.totalPrice}</title>
<div class="content">
	{#if data.items !== undefined && data.items.length !== undefined && data.items.length !== 0}
		<p class="head">КОРЗИНА</p>
		<div class="items">
			<span class="topLine">Позиция</span>
			<span class="topLine">Кол-во</span>
			<span class="topLine">Стоимость</span>
			<span class="topLine"></span>
			{#each data.items as item}
				<a href="{item.type}/{item.id}" class="item">{item.name}</a>
				<span class="item">{item.count}</span>
				<span class="item">{item.price}</span>
				<button onclick={() => { deleteItem(item.id) }} class="delete">Удалить</button>
			{/each}
		</div>
		<p class="purchaseHead">Оформить заказ на общую стоимость: {data.totalPrice} рублей</p>
		<FormPurchase/>
		{:else}
			{#await wait(5)}
				<div></div>
			{:then key}
				<p class="head">КОРЗИНА ПУСТА{key}</p>
			{/await}
	{/if}
</div>


<style lang="scss">
  p {
    all: unset;
  }

  .content {
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    padding: 170px 100px;
		font-size: 20px;
  }

  .head {
    padding-bottom: 100px;

    font-family: "Prosto One", sans-serif;
    font-size: 2em;
    color: #27160E;
    text-align: center;
  }

	.items {
		display: grid;
		grid-template-columns: 5fr 1fr 1fr 1fr;
		row-gap: 15px;
		column-gap: 5px;

		font-family: 'Montserat', sans-serif;
	}

	.topLine {
		font-size: 1.5em;
		margin-bottom: 1em;
	}

	.item {
		color: black;
		font-size: 1em;
	}

	button:hover {
		filter: opacity(0.8);
	}

  button:active {
    filter: opacity(1);
  }

	.delete {
    all: unset;
		cursor: pointer;

    background-color: #ebcf99;
    border-radius: 5px;
		padding: 5px 10px;
		height: 2em;

		font-size: 1.2em;
		text-align: center;

    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
	}

	.purchaseHead {
		all: unset;

		margin-top: 2.5em;
		margin-bottom: 1.5em;
    font-family: 'Montserat', sans-serif;
		font-size: 1.5em;
		text-align: center;
	}

  @media (max-width: 1050px) {
    .content {
      padding: 170px 50px;
      font-size: 15px;
    }

    .head {
      padding-bottom: 70px;
    }

    .items {
      grid-template-columns: 4fr 1fr 1fr 1fr;
    }
  }

  @media (max-width: 700px) {
    .content {
      padding: 100px 30px;
      font-size: 10px;
    }

    .head {
      padding-bottom: 50px;
    }

    .items {
      grid-template-columns: 3fr 1fr 1fr 1fr;
    }
  }

  @media (max-width: 400px) {
    .content {
      padding: 80px 10px;
      font-size: 8px;
    }

    .head {
      padding-bottom: 50px;
    }

    .items {
      grid-template-columns: 2fr 1fr 1fr 1fr;
    }
  }

</style>