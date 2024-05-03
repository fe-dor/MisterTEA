import ky from 'ky';
import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/[type]/[id]/$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		item: await ky
			.get(`${params.type}/${params.id}`, {
				prefixUrl: import.meta.env.VITE_API_HOST
			})
			.json(),
		type: params.type,
	}
}