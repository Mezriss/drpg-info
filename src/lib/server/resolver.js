import { decode } from 'toml-nodejs';

const characters = import.meta.glob('./data/characters/*', { as: 'raw' });

/**
 * @typedef {Object} Character
 * @property {string} slug
 * @property {string} name
 * */

/**
 * @param {string} slug
 * @returns {Promise<Character | null>}
 * */
export const getCharacter = async (slug) => {
	const key = `./data/characters/${slug}.toml`;
	if (!characters[key]) return null;
	return { ...decode(await characters[key]()), slug };
};

/**
 * @returns {Promise<Pick<Character, "slug", "name">[]>}
 * */
export const getCharacterList = async () => {
	return (await Promise.all(Object.keys(characters).map((key) => characters[key]())))
		.map(decode)
		.map(({ name }, i) => ({
			name,
			slug: Object.keys(characters)[i].match(/characters\/(.+)\.toml/)[1]
		}));
};
