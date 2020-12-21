import { writable } from 'svelte/store';

export const results = writable({ kind: '', items: [] });
export const pagination = writable({ searchedTerm: '', count: 12 });
export const sidebarContent = writable(null);