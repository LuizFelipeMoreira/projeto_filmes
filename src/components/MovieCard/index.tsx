import React, { PropsWithChildren } from 'react';
import { Card } from './styles';
import { MovieInterface } from '../../types/MovieInterface';

export const MovieCard = ({ movie }) => {
  const path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Card>
      <img src={path} alt="movie card" />
      <h3>{movie.original_title}</h3>
    </Card>
  );
};
