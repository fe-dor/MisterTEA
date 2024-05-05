export function wait(milliseconds: number | undefined) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}