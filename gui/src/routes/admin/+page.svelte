<script>
function changeType() {

}
</script>

<main>
		<div class="content">
		<select onchange={changeType} class="types" name="types" id="types">
			<option value="green">Зеленый</option>
			<option value="black">Черный</option>
			<option value="fruit">Фруктовый</option>
			<option value="flavored">Травяной</option>
			<option value="other">Другое</option>
		</select>
	</div>
</main>

<style>
	.content {
		min-height: 100vh;
	}

	.types {
		margin-top: 120px;
	}
</style>