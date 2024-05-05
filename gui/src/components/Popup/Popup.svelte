<script lang="ts">
	import { invalidateAll } from '$app/navigation';

	let { message } = $props<string>();
	async function close() {
		const elem = document.querySelector('#popupOverlay');
		elem.remove();
		await invalidateAll()
	}
</script>

<main>
	<div id="popupOverlay" class="popupOverlay">
		<div id="popup" class="popup">
			<p>{message}</p>
			<button class="submit" onclick={() => close()}>Закрыть</button>
		</div>
	</div>
</main>

<style>
	.popup {
		background-color: white;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		font-family:
			Noto Sans,
			sans-serif;
		font-weight: 400;
		font-size: 20px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.popupOverlay {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.submit {
		all: unset;

		display: flex;
		justify-content: center;

		border-radius: 5px;
		padding: 6px 9px;
		background: #f3e7bc;
		color: #000;

		cursor: pointer;
	}

	.submit:hover {
		opacity: 0.8;
	}

	.submit:active {
		opacity: 1;
	}
</style>
