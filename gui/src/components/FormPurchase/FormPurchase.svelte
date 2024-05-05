<script lang="ts">
	import ky from 'ky';
	import Popup from '../Popup/Popup.svelte';
	import Fallback from '../Fallback/Fallback.svelte';
	import { wait } from '$lib/wait';
	import { invalidateAll } from '$app/navigation';


	let load = $state(false);
	let showPopup = $state(false);
	let message = $state('Спасибо за покупку! Мы свяжемся с вами для оплаты!');

	async function handleSubmit(event) {
		event.preventDefault();
		load = true;
		try {
			await ky.post('purchase', {
				json: {
					name: event.target.name.value,
					lastname: event.target.lastname.value,
					email: event.target.email.value,
					phone: event.target.phone.value,
					address: event.target.address.value
				},
				prefixUrl: import.meta.env.VITE_API_HOST,
				credentials: "include"
			});
			document.getElementById('form').reset();
		} catch (e) {
			message = 'При отправке произошла ошибка';
		} finally {
			load = false;
			showPopup = true;
			await wait(5000);
			await invalidateAll()
			showPopup = false;
		}
	}
</script>

<main>
	{#if load}
		<Fallback />
	{/if}
	{#if showPopup}
		<Popup {message} />
	{/if}
	<div class="formDiv">
		<form id="form" class="form" onsubmit={handleSubmit}>
			<label for="name">Имя<span style="color: red">*</span></label><br />
			<input class="block" type="text" id="name" name="name" required /><br /><br />
			<label for="lastname">Фамилия<span style="color: red">*</span> </label><br />
			<input class="block" type="text" id="lastname" name="lastname" required /><br /><br />
			<label for="email">Email<span style="color: red">*</span></label><br />
			<input class="block" type="email" id="email" name="email" required /><br /><br />
			<label for="phone">Телефон<span style="color: red">*</span></label><br />
			<input class="block" type="number" id="phone" name="phone" placeholder="+7..." required/><br /><br />
			<label for="phone">Адрес<span style="color: red">*</span></label><br />
			<input class="block" type="text" id="address" name="address" placeholder="Москва..." required/><br /><br />
			<div class="checkboxBlock">
				<input type="checkbox" value="checkbox" id="checkbox" name="checkbox" required />
				<label for="checkbox"
					>Выражаю свое согласие АО «MisterTEA» на получение рекламно-информационной рассылки на
					указанный адрес электронной почты и обработку персональных данных, указанных в форме.</label
				>
			</div>
			<br /><br />
			<div style="display: flex; width: 100%; justify-content: center;">
				<input style="text-align: center" class="submit" type="submit" value="Отправить" />
			</div>
		</form>
	</div>
</main>

<style>
	.formDiv {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.form {
		width: 38%;
		background-color: #d7a84e;
		border-radius: 10px;
		padding: 21px 35px 29px 49px;
		font-family:
			Noto Sans,
			sans-serif;
		font-weight: 400;
		font-size: 20px;
		color: #fff;

		box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	}

	.block {
		all: unset;
		box-sizing: border-box;

		width: 100%;
		min-height: 55px;
		margin-top: 10px;
		padding: 0 15px;

		background: none;

		border: solid white 1px;
		border-radius: 10px;
	}

	.submit {
		all: unset;

		display: flex;
		justify-content: center;

		border-radius: 5px;
		padding: 6px 9px;
		width: 220px;
		height: 55px;
		background: #f3e7bc;
		font-family:
			Noto Sans,
			sans-serif;
		font-weight: 600;
		font-size: 20px;
		color: #000;

		cursor: pointer;
	}

	input:hover {
		opacity: 0.8;
	}

	input:active {
		opacity: 1;
	}

	.checkboxBlock {
		display: flex;
		align-items: center;
		height: 100%;
	}

	input[type='checkbox'] {
		height: 50px;
		width: 50px;
		margin-right: 17px;
	}

	@media (max-width: 1300px) {
		.form {
			width: 50%;
		}
	}

	@media (max-width: 800px) {
		.form {
			width: 70%;
			padding: 21px 15px 29px 20px;
		}
		.block {
			min-height: 40px;
		}
	}

	@media (max-width: 600px) {
		.form {
			width: 100%;
			font-size: 15px;
		}
		.submit {
			width: 200px;
			height: 50px;
			font-size: 15px;
		}
	}

	@media (max-width: 500px) {
		.form {
			font-size: 12px;
		}
		.submit {
			width: 150px;
			height: 30px;
			font-size: 12px;
		}
	}

	@media (max-width: 350px) {
		.form {
			font-size: 8px;
			padding: 21px 9px 29px 12px;
		}
	}
</style>
