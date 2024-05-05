<script>
	import Form from '../../components/Form/Form.svelte';
	import Provider from '$assets/provider.webp'
	import ProviderBig from '$assets/providerBig.webp'
</script>

<title>Поставщикам</title>
<main>
	<div class="pic">
		<div class="head">
			<span style="text-shadow: 4px 2px 5px black; z-index: 2">ПОСТАВЩИКАМ</span>
		</div>
		<picture style="display: flex;">
			<source srcset={Provider} media="(max-width: 1150px)" />
			<img style="filter: brightness(0.75)" class="img" src={ProviderBig} alt="" />
		</picture>
	</div>
	<div class="content">
		<div class="text">
			<h1>Мы хотим с вами работать!</h1>
			<p>
				MisterTEA – это динамично развивающаяся компания, специализирующаяся на продаже чая и чайной
				продукции. Мы ценим качество, инновации и уникальность наших продуктов, и ищем надежных
				партнеров, которые могут предложить нам высококачественные товары, соответствующие нашим
				стандартам.
			</p>
			<h2>Почему вы должны стать поставщиком MisterTEA?</h2>
			<ul>
				<li>
					Расширение рынка: Мы стремимся расширить наш ассортимент и предлагать нашим клиентам
					широкий выбор чая и чайной продукции. Ваша продукция может помочь нам достичь этой цели.
				</li>
				<li>
					Премиальные условия: Мы предлагаем конкурентоспособные условия сотрудничества, включая
					выгодные скидки на оптовые покупки и возможности для развития бизнеса.
				</li>
				<li>
					Поддержка и развитие: Мы стремимся поддерживать наших поставщиков, предлагая обучающие
					программы, маркетинговые ресурсы и помощь в развитии бизнеса.
				</li>
			</ul>
			<h2>Требования к поставщикам:</h2>
			<ul>
				<li>
					Качество продукции: Ваш чай и чайная продукция должны соответствовать высоким стандартам
					качества. Мы ищем продукты, которые отличаются уникальностью и вкусом.
				</li>
				<li>
					Соблюдение стандартов: Ваша продукция должна соответствовать всем требованиям и стандартам
					безопасности, а также соответствовать нашим требованиям к упаковке и маркировке.
				</li>
				<li>
					Надежность поставок: Мы ценим надежность наших поставщиков и ожидаем стабильных и
					своевременных поставок.
				</li>
			</ul>
			<h2>Как стать поставщиком?</h2>
			<p>
				Если вы заинтересованы в сотрудничестве с MisterTEA, пожалуйста, свяжитесь с нами через наш
				официальный сайт или по электронной почте. Мы будем рады обсудить детали и помочь вам в
				процессе интеграции в нашу сеть поставок. MisterTEA – это не только возможность расширить
				ваш бизнес, но и шанс стать частью нашего успешного и вдохновляющего сообщества. Мы ждем
				вас!
			</p>
			<h1>ОСТАВЬТЕ ЗАЯВКУ!</h1>
		</div>
		<Form theme={'Поставщики'} question={'Ваше предложение'} />
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

	.text {
		font-family:
			Noto Sans,
			sans-serif;
		font-weight: 400;
		font-size: 30px;
		line-height: 150%;
		color: #000;
	}

	h1 {
		font-family: 'Prosto One', sans-serif;
		font-size: 50px;
		text-transform: uppercase;
		color: #1e1e1e;
		margin-top: 0;
		padding-top: 90px;
		margin-bottom: 36px;
	}

	h2 {
		@extend h1;
		font-size: 40px;
		padding-top: 40px;
	}

	.head {
		position: absolute;

		display: flex;
		justify-content: center;
		align-items: center;

		font-family: 'Prosto One', sans-serif;
		font-weight: 400;
		font-size: 98px;
		color: white;
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

		.text {
			font-size: 20px;
		}

		h1 {
			font-size: 30px;
			padding-top: 60px;
		}

		h2 {
			padding-top: 20px;
			font-size: 22px;
		}
	}

	@media (max-width: 400px) {
		.content {
			padding-left: 20px;
			padding-right: 20px;
			padding-bottom: 80px;
		}

		.text {
			font-size: 13px;
		}

		h1 {
			font-size: 15px;
			padding-top: 45px;
		}

		h2 {
			font-size: 14px;
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
