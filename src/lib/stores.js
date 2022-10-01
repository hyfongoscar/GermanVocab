// @ts-nocheck
import { writable } from 'svelte/store';

const createWritableStore = (key, startValue) => {
	const { subscribe, set } = writable(startValue);

	return {
		subscribe,
		set,
		useLocalStorage: () => {
			if (typeof localStorage !== 'undefined') {
				const json = localStorage.getItem(key);
				if (json) {
					set(JSON.parse(json));
				}
				subscribe((current) => {
					localStorage.setItem(key, JSON.stringify(current));
				});
			}
		}
	};
};

export const vocabs = createWritableStore('vocabs', []);
export const verbs = createWritableStore('verbs', []);
export const nouns = createWritableStore('nouns', []);
export const chapters = writable([
	'',
	'Kaffee oder Tee?',
	'Sprache im Kurs',
	'Städte - Länder - Sprachen',
	'Menschen und Häuser',
	'Termine',
	'Orientierung'
]);