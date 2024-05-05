<script lang="ts">
	import Navbar from '../components/Navbar/Navbar.svelte';
	import './app.scss';
	import '/src/styles/fonts/fonts.scss';
	import Footer from '../components/Footer/Footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
