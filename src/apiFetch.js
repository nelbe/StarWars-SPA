import axios from 'axios/index';
// get functions
export const getFilm = (url) => axios.get(url);
export const getCharacter = (url) => axios.get(url);