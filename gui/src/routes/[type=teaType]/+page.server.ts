import ky from 'ky';
import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/[type=teaType]/$types';


export const load: PageServerLoad = async ({ params }) => {
	try {
		return {
			items: await ky
				.get(params.type, {
					prefixUrl: import.meta.env.VITE_API_HOST
				})
				.json(),
			type: params.type
		};
	} catch (e) {
		console.log("wrong category")
	}
};
