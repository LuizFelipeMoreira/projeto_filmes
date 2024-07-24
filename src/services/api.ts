import axios from 'axios';
import { MovieInterface } from '../types/MovieInterface';

const API =
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGIwNzMyNjk1Mjc2MGRmYWRiZWZlODZmMzgyMTlhMCIsInN1YiI6IjY1YjNjZGY1YTBmMWEyMDE2MWJlNmY3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fsE-ruH1E08Okpsw6kOi3l1JaFTxI8ZK6uMCKiV0AWg',
  },
};

export async function request() {
  try {
    const response = await axios.get(API, options);
    const { results } = response.data;
    const gamesIn = [...results];

    return gamesIn as MovieInterface[];
  } catch (error) {
    throw new Error('Erro ao fazer a requisição');
  }
}
