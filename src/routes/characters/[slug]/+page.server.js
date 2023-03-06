import { error } from '@sveltejs/kit';
import { getCharacter } from '$lib/server/resolver.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	if (/^\d+$/.test(params.slug)) {
		const character = await getCharacter(params.slug);
		if (character) return character;
		throw error(404, 'Not found');
	}

	throw error(404, 'Why are we still here? Just to suffer?');
}
