export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/(pages)/about": [4],
		"/(pages)/contact/[[service]]": [~5],
		"/(pages)/services/data-scraping": [6],
		"/(pages)/services/greenfield-software-development": [7],
		"/(pages)/services/low-code-automation": [8],
		"/(pages)/services/low-code-consulting": [9],
		"/(pages)/services/low-code-development": [10],
		"/(pages)/services/mvp-development": [11],
		"/(pages)/services/no-code-automation": [12],
		"/(pages)/services/no-code-consulting": [13],
		"/(pages)/services/open-source-consulting": [14],
		"/(pages)/services/poc-development": [15],
		"/(pages)/services/robotic-process-automation": [16],
		"/(pages)/services/slc-development": [17],
		"/(pages)/[noorlow]-code/[[slug]]": [~3]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';