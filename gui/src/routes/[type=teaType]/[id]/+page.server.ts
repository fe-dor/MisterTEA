import ky from 'ky';
import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/[type=teaType]/[id]/$types';


export const load: PageServerLoad = async ({ params }) => {
	try {
		return {
			item: await ky
				.get(`${params.type}/${params.id}`, {
					prefixUrl: import.meta.env.VITE_API_HOST
				})
				.json(),
			type: params.type,
		}
	} catch (e) {
		console.log('wrong item id')
	}
}