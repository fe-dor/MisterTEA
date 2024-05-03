<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import Slide from './Slide.svelte';

	const slides = [
		{ sale: '-25%', text: 'на чай с чабрецом', photoNumber: 1, url: "black/6633e176dd4c15066d0684cc" },
		{ sale: '-50%', text: 'на чайный набор 1', photoNumber: 2, url: "other/66325e25e6651482c2882174"	 },
		{ sale: '-10%', text: 'на Апельсин Имбриь', photoNumber: 3, url: "fruit/663269fce6651482c28821f5" },
		{ sale: '-25%', text: 'на чай матча', photoNumber: 4, url: "green/6633e1eadd4c15066d0684d1" }
	];
</script>

<main>
	<Splide
		options={{
			type: 'loop',
			arrows: false,
			autoplay: true,
			interval: 4000,
			mediaQuery: 'max',
			fixedWidth: '35vw',
			breakpoints: {
				1700: {
					fixedWidth: '40vw'
				},
				1400: {
					fixedWidth: '52vw'
				},
				600: {
					fixedWidth: '55vw'
				},
				500: {
					fixedWidth: '60vw'
				}
			},
			pagination: false
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
