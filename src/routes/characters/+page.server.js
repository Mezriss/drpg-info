import { getCharacterList } from '$lib/server/resolver.js';

/** @type {import('./$types').PageLoad} */
export async function load() {
	return {
		charList: await getCharacterList()
	};
}
