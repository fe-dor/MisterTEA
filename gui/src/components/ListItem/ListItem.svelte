<script lang="ts">
	import { goto } from '$app/navigation';

	type ItemProps = {
		name: string;
		price: number;
		_id: string;
		type: string;
	};
	let { item } = $props<ItemProps>();
</script>

<button onclick={() => goto(`/${item.type}/${item._id}`)}>
	<span>{item.name}</span>
	<span style="font-size: 1.5em; margin-left: 20px">{item.price}</span>
</button>

<style lang="scss">
	button {
		all: unset;
		cursor: pointer;

		background-color: #ebcf99;
		border-radius: 10px;
		padding: 20px 30px;

		font-family: 'Noto Sans', sans-serif;
		font-weight: 400;
		font-size: 28px;
		line-height: 150%;
		color: #3d4d6b;
		//text-shadow: 1px 1px 1px white, 0 0 1px white;

		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
	}

	button:hover {
		opacity: 0.8;
	}

	button:active {
		opacity: 1;
	}
  @media (max-width: 1150px) {
    button {
      font-size: 20px;
      line-height: 125%;
      padding: 15px 25px;
		}
  }

  @media (max-width: 900px) {
    button {
      font-size: 15px;
      line-height: 100%;
      padding: 10px 20px;
    }
  }

  @media (max-width: 700px) {
    button {
      font-size: 10px;
    }
  }

  @media (max-width: 400px) {
    button {
      font-size: 10px;
      padding: 8px 15px;
    }
  }

  @media (max-width: 300px) {
    button {

    }
  }
</style>
