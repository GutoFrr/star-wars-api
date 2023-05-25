import CharactersSection from '@/components/Movie-Page/CharactersSection';
import MovieSection from '@/components/Movie-Page/MovieSection';
import ReviewsSection from '@/components/Movie-Page/ReviewsSection';
import { Character } from '@/interfaces/character';
import { Movie } from '@/interfaces/movie';
import { serverSideRequest } from '@/services/request';

interface Props {
  params: { id: string };
}

export default async function Movie({ params }: Props) {
  const movie = await getMovie(params.id);
  const characters = await getMovieCharacters(params.id);

  return (
    <>
      <MovieSection movie={movie} />
      <CharactersSection characters={characters} />
      <ReviewsSection />
    </>
  );
}

async function getMovie(id: string) {
  const movie = await serverSideRequest(`/films/${id}`, { cache: 'no-store' });

  if (movie.episode_id > 6 || movie.episode_id <= 0) {
    throw new Error('Filme não encontrado');
  }

  return movie as Movie;
}

async function getMovieCharacters(id: string) {
  const movie = await getMovie(id);

  const data = movie.characters!;

  const characters = await Promise.all(
    data.map(async (item) => {
      const res = await fetch(item, { cache: 'no-store' });
      return await res.json();
    })
  );

  return characters as Character[];
}
