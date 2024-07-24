import React from 'react';
import { MovieInterface } from './types/MovieInterface';
import { request } from './services/api';
import { Card } from './components/MovieCard/styles';

function App() {
  const [movies, setMovie] = React.useState<MovieInterface[]>([]);

  async function printMovie() {
    const moviesData = await request();

    console.log(moviesData);

    setMovie(moviesData);
    return movies;
  }

  React.useEffect(() => {
    printMovie();
  }, []);

  return (
    <div>
      {movies && movies.map((item) => <Card key={item.id} movie={item} />)}
    </div>
  );
}

export default App;
