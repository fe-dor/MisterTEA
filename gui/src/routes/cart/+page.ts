/*
Загрузка на клиенте, потому что ответ сервера устанавливает куки
*/

import ky from 'ky';
import type { PageLoad } from '../../../.svelte-kit/types/src/routes/cart/$types';


export const load: PageLoad = async () => {
	try {
		return await ky
			.get('cart', {
				prefixUrl: import.meta.env.VITE_API_HOST,
				credentials: "include"
			}).json()
	} catch (e) {
		console.log('cart error')
	}
}