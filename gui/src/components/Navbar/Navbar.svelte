<main class="container">
	<a href="/">
		<img class="logo" src="/src/assets/logo.svg" alt="Логотип" />
	</a>
	<button>
		<img class="cart" src="/src/assets/cart.svg" alt="Корзина" />
	</button>
</main>

<style>
	button {
		border: none;
		background: none;
	}

	.container {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-line-pack: center;
		align-content: center;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		position: fixed;
		background-color: rgba(255, 255, 255, 0.2);
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);
		padding: 20px 80px;

		z-index: 5;
	}

	.logo {
		cursor: pointer;
	}

	.cart {
		cursor: pointer;
	}

	@media (max-width: 1150px) {
		.container {
			padding: 15px 60px;
		}
	}

	@media (max-width: 700px) {
		.container {
			padding: 10px 30px;
		}

		.logo {
			height: 40px;
		}

		.cart {
			height: 40px;
		}
	}

	@media (max-width: 400px) {
		.container {
			padding: 10px 20px;
		}

		.logo {
			height: 30px;
		}

		.cart {
			height: 30px;
		}
	}

	@media (max-width: 300px) {
		.container {
			padding: 7px 10px;
		}

		.logo {
			height: 25px;
		}

		.cart {
			height: 25px;
		}
	}
</style>
