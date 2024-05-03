import ky from 'ky';
import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/[type]/$types';

export const load: PageServerLoad = async ({ params }) => {
	if (params.type == undefined) return;
	return {
		items: await ky
			.get(params.type, {
				prefixUrl: import.meta.env.VITE_API_HOST
			})
			.json(),
		type: params.type
	};
};
