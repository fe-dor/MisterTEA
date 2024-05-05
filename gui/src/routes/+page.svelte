<script lang="ts">
	import SliderSales from '../components/SliderSales/SliderSales.svelte';
	import SliderReviews from '../components/SliderReviews/SliderReviews.svelte';
	import Form from '../components/Form/Form.svelte';
	import { goto } from '$app/navigation';
	import Girl from '$assets/girl.webp';
	import Boy from '$assets/boy.webp';
	import Green from '$assets/green.png';
	import Black from '$assets/black.png';
	import Flavored from '$assets/flavored.png';
	import Fruit from '$assets/fruit.png';
	import Prod1 from '$assets/prod1.png';
	import Prod2 from '$assets/prod2.png';
	import Prod3 from '$assets/prod3.png';
</script>

<title>MisterTEA - магазин чай</title>
<main>
	<picture class="pic">
		<source srcset={Boy} media="(max-width: 1150px)" />
		<img class="img" src={Girl} alt="" />
	</picture>
	<div class="content">
		<p class="head">ЧАЙ</p>
		<div class="groups">
			<button
				class="group"
				onclick={() => {
					goto('/green');
				}}
			>
				<img class="teaPic" src={Green} alt="Зеленный чай" />
				<span class="teaText">Зеленый чай</span>
			</button>
			<button
				class="group"
				onclick={() => {
					goto('/black');
				}}
			>
				<img class="teaPic" src={Black} alt="Черный чай" />
				<span class="teaText">Черный чай</span>
			</button>
			<button
				class="group"
				onclick={() => {
					goto('/flavored');
				}}
			>
				<img class="teaPic" src={Flavored} alt="Травяной чай" />
				<span class="teaText">Травяной чай</span>
			</button>
			<button
				class="group"
				onclick={() => {
					goto('/fruit');
				}}
			>
				<img class="teaPic" src={Fruit} alt="Фруктовый чай" />
				<span class="teaText">Фруктовый чай</span>
			</button>
		</div>
		<p class="head">популярные продукты</p>
		<div class="groupsPopular">
			<button
				class="group"
				onclick={() => {
					goto('other/66325e25e6651482c2882174');
				}}
			>
				<img class="productPic" src={Prod1} alt="Чайный набор" />
				<span class="teaText">Чайный набор 1</span>
			</button>
			<button
				class="group"
				onclick={() => {
					goto('other/6633e06cdd4c15066d0684c5');
				}}
			>
				<img class="productPic" src={Prod2} alt="Чайный набор" />
				<span class="teaText">Чайный набор 2</span>
			</button>
			<button
				class="group"
				id="lastItem"
				onclick={() => {
					goto('other/6633e06fdd4c15066d0684c6');
				}}
			>
				<img class="productPic" src={Prod3} alt="Чайный набор" />
				<span class="teaText">Чайный набор 3</span>
			</button>
		</div>
		<SliderSales />
		<p class="head">отзывы</p>
		<SliderReviews />
		<p class="head">Остались вопросы?</p>
		<Form theme={'Другие вопросы'} question={'Ваш вопрос'} />
	</div>
</main>

<style lang="scss">
  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }

  button:hover {
    opacity: 0.8;
  }

  button:active {
    opacity: 1;
  }

  main {
    display: flex;
    flex-direction: column;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .pic {
    display: flex;
  }

  .content {
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 110px;
    margin: 0;
    background-color: #f3e7bc;
  }

  .head {
    font-family: 'Prosto One', sans-serif;
    font-size: 50px;
    text-transform: uppercase;
    color: #1e1e1e;
    margin-top: 0;
    padding-top: 90px;
    margin-bottom: 36px;
  }

  .groups {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(1, auto);
    justify-content: space-between;
  }

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .teaPic {
    background: linear-gradient(to top, #d7a84e, #f3e7bc);
    border-radius: 30px;
    padding: 20px 20px;
    margin-bottom: 18px;

    width: 16vw;
    height: 15vw;
  }

  .productPic {
    @extend .teaPic;
    width: 21vw;
    height: 20vw;
  }

  .teaText {
    font-family: 'Montserat', sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-transform: capitalize;
    color: #1e1e1e;
  }

  .groupsPopular {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(1, auto);
    justify-content: space-between;
    margin-bottom: 93px;
  }

  @media (max-width: 1150px) {
    .content {
      padding-left: 60px;
      padding-right: 60px;
    }

    .groups {
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(2, auto);
      row-gap: 50px;
    }

    .teaPic {
      width: 30vw;
      height: 28vw;
    }

    .productPic {
      width: 19vw;
      height: 18vw;
    }
  }

  @media (max-width: 900px) {
    .groupsPopular {
      grid-template-columns: repeat(2, auto);
      margin-bottom: 50px;
    }

    .productPic {
      width: 30vw;
      height: 28vw;
    }

    #lastItem {
      display: none;
    }
  }

  @media (max-width: 700px) {
    .content {
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 95px;
    }

    .teaText {
      font-size: 20px;
    }

    .head {
      font-size: 40px;
    }

    .head {
      padding-top: 70px;
    }
  }

  @media (max-width: 400px) {
    .content {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 80px;
    }

    .teaPic,
    .productPic {
      width: 27vw;
      height: 27vw;
    }

    .teaText {
      font-size: 15px;
    }

    .head {
      font-size: 30px;
      padding-top: 50px;
    }
  }

  @media (max-width: 300px) {
    .content {
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 70px;
    }

    .teaPic,
    .productPic {
      width: 25vw;
      height: 25vw;
    }

    .teaText {
      font-size: 12px;
    }

    .head {
      font-size: 20px;
      padding-top: 40px;
    }
  }
</style>