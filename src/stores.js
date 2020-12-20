import { writable } from 'svelte/store';

export const results = writable({ kind: '', totalItems: 0, items: [] });