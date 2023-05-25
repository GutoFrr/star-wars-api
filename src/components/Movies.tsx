import { serverSideRequest } from '@/services/request';
import Carousel from './Carousel';
import { Movie } from '@/interfaces/movie';

export default async function Movies() {
  const movies = await getMovies();

  return <Carousel movies={movies} />;
}

async function getMovies() {
  const data = await serverSideRequest('/films', { cache: 'no-store' });

  data.results.map((item: Movie) => {
    item.urlId = item.url?.split('/')[5];
  });

  return data.results as Movie[];
}
