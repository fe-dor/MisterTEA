<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/[type]/$types';
	import { derived } from 'svelte/store';
	import ListItem from '../../components/ListItem/ListItem.svelte';

	let { data } = $props<PageServerLoad>();

	let header = $derived.by(() => {
		switch (data.type) {
			case 'green': {
				return 'Зеленый чай';
			}
			case 'black': {
				return 'Черный чай';
			}
			case 'fruit': {
				return 'Фруктовый чай';
			}
			case 'flavored': {
				return 'Травяной чай';
			}
			case 'other': {
				return 'Другая продукция';
			}
			default: {
				return '404 - Нет такой категории товаров';
			}
		}
	});

	function isSetType(id: string) {
		if (id === data.type) {
			return 'background-color: #D7A84E;';
		}
	}

	function changeType(newType: string) {
		if (data.type != newType) {
			goto(`/${newType}`, { replaceState: true, noScroll: true });
		}
	}
</script>

<title>{header}</title>
<main>
	<div class="pic">
		<div class="head"><span style="text-shadow: 4px 2px 5px black; z-index: 2">{header}</span></div>
		<picture style="display: flex">
			<source srcset="/src/assets/catalog.webp" media="(max-width: 1150px)" />
			<img style="filter: brightness(0.75)" class="img" src="/src/assets/catalogBig.webp" alt="" />
		</picture>
	</div>
	<div class="content">
		<div class="nav">
			<button class="navButton" style={isSetType('green')} onclick={() => changeType('green')}>
				Зеленый
			</button>
			<button class="navButton" style={isSetType('black')} onclick={() => changeType('black')}>
				Черный
			</button>
			<button
				class="navButton"
				style={isSetType('flavored')}
				onclick={() => changeType('flavored')}
			>
				Травяной
			</button>
			<button class="navButton" style={isSetType('fruit')} onclick={() => changeType('fruit')}>
				Фруктовый
			</button>
			<button class="navButton" style={isSetType('other')} onclick={() => changeType('other')}>
				Другое
			</button>
		</div>
		<div class="items">
			{#each data.items as item}
				<ListItem item={{...item, type: data.type}} />
			{/each}
		</div>
	</div>
</main>

<style lang="scss">
	.pic {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.img {
		width: 100%;
		height: 100%;
	}

	.content {
		padding-left: 80px;
		padding-right: 80px;
		padding-bottom: 110px;
		margin: 0;
		background-color: #f3e7bc;
	}

	.head {
		position: absolute;

		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;

		font-family: 'Prosto One', sans-serif;
		font-weight: 400;
		font-size: 98px;
		color: white;
	}

	.nav {
		padding-top: 30px;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		column-gap: 30px;
	}

	.navButton {
		all: unset;

		padding: 15px 15px;
		text-align: center;

		border-radius: 10px;
		background-color: #ebcf99;

		font-family: 'Prosto One', sans-serif;
		font-size: 28px;
		color: #3d4d6b;

		box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
	}

	.navButton:hover {
		opacity: 0.8;
	}

	.navButton:active {
		opacity: 1;
	}

	.items {
		padding-left: 20px;
		padding-right: 20px;
		margin-top: 50px;
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 20px;
	}

	@media (max-width: 1150px) {
		.head {
			font-size: 6.8vw;
		}
		.content {
			padding-left: 60px;
			padding-right: 60px;
		}
	}

	@media (max-width: 700px) {
		.content {
			padding-left: 30px;
			padding-right: 30px;
			padding-bottom: 95px;
		}
	}

	@media (max-width: 400px) {
		.content {
			padding-left: 20px;
			padding-right: 20px;
			padding-bottom: 80px;
		}
	}

	@media (max-width: 300px) {
		.content {
			padding-left: 10px;
			padding-right: 10px;
			padding-bottom: 70px;
		}
	}
</style>
