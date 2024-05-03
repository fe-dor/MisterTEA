<script>
	import Form from '../../components/Form/Form.svelte';
</script>

<title>Курьерам</title>
<main>
	<div class="pic">
		<div class="head"><span style="text-shadow: 4px 2px 5px black; z-index: 2">КУРЬЕРАМ</span></div>
		<picture style="display: flex">
			<source srcset="/src/assets/courier.webp" media="(max-width: 1150px)" />
			<img style="filter: brightness(0.75)" class="img" src="/src/assets/courierBig.webp" alt="" />
		</picture>
	</div>
	<div class="content">
		<div class="text">
			<h1>Стань частью MisterTEA!</h1>
			<p>
				В нашем интернет-магазине чая мы ценим каждого клиента и стремимся обеспечить ему
				высококачественный сервис. В связи с этим, мы ищем ответственных и надежных курьеров,
				готовых стать частью нашей команды. Если вы ищете возможность работать в динамичной и
				дружной команде, где каждый день приносит новые вызовы и возможности для профессионального
				роста, то мы приглашаем вас стать курьером в нашем интернет-магазине.
			</p>
			<h2>Преимущества работы курьером в нашем интернет-магазине:</h2>
			<ul>
				<li>
					Огромный выбор чая: В нашем ассортименте представлены не только различные виды чая, но и
					уникальные подборки, которые вы не найдете в других магазинах. Это означает, что вы будете
					работать с широким спектром продуктов, что делает вашу работу интересной и разнообразной.
				</li>
				<li>
					Гибкий график работы: Мы ценим ваше время и предлагаем гибкий график работы, который
					позволит вам совмещать работу с курьером с другими обязанностями.
				</li>
				<li>
					Возможности для профессионального роста: В нашей компании есть возможности для карьерного
					роста и профессионального развития. Мы ценим наших сотрудников и стремимся создать условия
					для их профессионального развития.
				</li>
				<li>
					Компенсация и бонусы: Мы предлагаем конкурентоспособные условия труда, включая компенсацию
					за выполненные заказы и возможность получения бонусов за высокую работу.
				</li>
				<li>
					Обучение и поддержка: Мы предоставляем курьерам необходимое обучение и поддержку, чтобы
					они могли успешно выполнять свои обязанности.
				</li>
			</ul>
			<h2>Условия работы:</h2>
			<ul>
				<li>
					Готовность к работе в любое время: Мы ищем курьеров, готовых работать в любое время суток,
					чтобы обеспечить своевременную доставку заказов.
				</li>
				<li>
					Надежность и ответственность: Важно быть ответственным и надежным, чтобы обеспечить
					высокое качество нашей службы доставки.
				</li>
				<li>
					Умение работать в команде: Мы ценим сотрудничество и готовы работать в команде с
					курьерами, чтобы обеспечить нашим клиентам лучший сервис.
				</li>
			</ul>
			<p>
				Если вы готовы стать частью нашей команды и предлагаете свои услуги как курьер, мы с
				удовольствием рассмотрим вашу кандидатуру. Мы ждем вашего обращения и готовы обсудить детали
				сотрудничества.
			</p>
			<h1>Оставьте заявку!</h1>
		</div>
		<Form theme={'Курьер'} question={'Расскажите о себе'} />
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
