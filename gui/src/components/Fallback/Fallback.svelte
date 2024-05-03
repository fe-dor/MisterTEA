<div class="loadingOverlay">
	<div class="spinner"></div>
</div>

<style>
	.loadingOverlay {
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

	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border-left-color: #d7a84e;
		animation: spin 1s ease infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
