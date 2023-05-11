import axios from 'axios';
import { axiosInstance } from '../libs/axios';

const DATA_LIMIT = 12;

export const getPokemonList = () => {
  return axiosInstance.get(`pokemon/?limit=${DATA_LIMIT}`);
};

export const loadMorePokemonList = (url) => {
  return axios.get(url);
};
