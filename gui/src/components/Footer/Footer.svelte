<script lang="ts">
</script>

<main>
	<div class="table">
		<a href="/" class="item1">
			<img src="/src/assets/logo.svg" alt="logo" />
		</a>
		<div class="item2">
			<a class="link" href="/green">Зеленый чай</a>
			<a class="link" href="/black">Черный чай</a>
			<a class="link" href="/other">Чайные наборы</a>
			<a class="link" href="/couriers">Курьерам</a>
		</div>
		<div class="item3">
			<a class="link" href="/providers">Поставщикам</a>
			<a class="link" href="law/#perData">Политика обработки персональных данных</a>
			<a class="link" href="law/#confPol">Политика конфеденциальности</a>
			<a class="link" href="law/#useTerms">Пользовательское соглашение</a>
		</div>
		<div class="item4">
			<span style="font-weight: 500; font-size: 18px; color: #000;">Контакты</span>
			<a href="tel:+79184516167" style="font-weight: 400; font-size: 15px; color: #000;"
				>+7 918 451 61 67</a
			>
			<a
				href="mailto:parashchenko.fedor@gmail.com"
				style="font-weight: 400; font-size: 15px; color: #000;">parashchenko.fedor@gmail.com</a
			>
		</div>
	</div>
	<div class="bottom">
		Copyright 2024
		<img src="/src/assets/@.svg" alt="" style="margin-left: 4px; margin-right: 3px;" />
		MISTERTEA
	</div>
</main>

<style>
	main {
		padding: 48px 80px 34px;
		background-color: #f8f1d7;
	}

	.table {
		display: grid;
		justify-content: space-between;
		row-gap: 30px;
	}

	.bottom {
		width: 100%;
		margin-top: 70px;

		font-family: 'Montserat', sans-serif;
		font-weight: 400;
		font-size: 15px;
		color: #000;

		display: flex;
		justify-content: center;
	}

	.item1 {
		grid-column: 1;
		grid-row: 1;
	}

	.item2,
	.item3 {
		display: grid;
		row-gap: 8px;
	}

	.item4 {
		grid-column: 4;
		grid-row: 1;

		display: flex;
		flex-direction: column;
		row-gap: 8px;

		font-family: 'Montserat', sans-serif;
	}

	.link {
		font-family: 'Montserat', sans-serif;
		font-weight: 400;
		font-size: 15px;
		color: #000;
	}

	@media (max-width: 1300px) {
		.item1 {
			grid-column: 1;
			grid-row: 1;
		}

		.item2 {
			grid-column: 1;
			grid-row: 2;
		}

		.item3 {
			grid-column: 2;
			grid-row: 2;
		}

		.item4 {
			grid-column: 2;
			grid-row: 1;
		}

		.table {
			display: grid;
			row-gap: 30px;
		}

		main {
			padding: 35px 70px 20px;
		}
	}

	@media (max-width: 700px) {
		.item1 {
			display: none;
		}

		.item2 {
			grid-column: 1;
			grid-row: 1;
		}

		.item3 {
			grid-column: 1;
			grid-row: 2;
		}

		.item4 {
			grid-column: 1;
			grid-row: 3;
		}

		main {
			padding: 20px 30px 20px;
		}
	}
</style>
