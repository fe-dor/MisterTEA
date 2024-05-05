<script lang="ts">
	import '@splidejs/svelte-splide/css/themes/splide-default.min.css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import Slide from './Slide.svelte';
	const slides = [
		{
			text: 'Я очень доволен этим чаем. Его вкус и аромат были не только приятными, но и очень успокаивающими.',
			photoNumber: 1
		},
		{ text: 'Очень доволен чаем. Валя лично доставила. Все супер.', photoNumber: 2 },
		{ text: 'Встреча с чаем, из MisterTEA, была настоящим открытием.', photoNumber: 3 },
		{ text: 'MisterTEA - настоящие профессионалы своего дела! Отличный чай.', photoNumber: 4 }
	];
</script>

<main>
	<Splide
		options={{
			type: 'loop',
			arrows: false,
			autoplay: true,
			interval: 3000
		}}
	>
		<SplideSlide>
			<Slide prop={slides[0]} />
		</SplideSlide>
		<SplideSlide>
			<Slide prop={slides[1]} />
		</SplideSlide>
		<SplideSlide>
			<Slide prop={slides[2]} />
		</SplideSlide>
		<SplideSlide>
			<Slide prop={slides[3]} />
		</SplideSlide>
	</Splide>
</main>
