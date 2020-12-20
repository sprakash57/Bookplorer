import { URL } from './constants';

export const fetchBooks = (term, count) => fetch(`${URL}${term}&maxResults=${count}`);