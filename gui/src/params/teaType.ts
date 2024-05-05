import type { ParamMatcher } from '@sveltejs/kit';


export const match: ParamMatcher = (param) => {
	switch (param) {
		case 'green':
		case 'black':
		case	'fruit':
		case	'flavored':
		case	'other': return true
		default: return false
	}
};