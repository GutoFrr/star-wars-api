import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/interfaces/movie';

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <Link
      className="flex flex-col min-w-[268px] w-1/3 last:mr-16 rounded-[10px]"
      href={`/movie/${movie.urlId}`}>
      <Image
        src={`/movie_posters/episode_${movie.episode_id}.jpg`}
        alt={movie.title}
        width={500}
        height={500}
        priority
        className="h-[324px] object-cover w-full rounded-t-[10px]"
      />
      <h3 className="text-white bg-theme-yellow py-2 px-4 text-sm font-medium">{movie.title}</h3>
      <article className="py-2 px-4 border border-theme-gray-200 rounded-b-[10px] flex flex-col gap-3">
        <div>
          <h4 className="text-theme-gray-700 font-light text-xs mb-1">Data de Lançamento</h4>
          <h5 className="font-light text-[10px] text-theme-gray-700">{movie.release_date}</h5>
        </div>
        <div>
          <h4 className="text-theme-gray-700 font-light text-xs mb-1">Diretor</h4>
          <h5 className="font-light text-[10px] text-theme-gray-700">{movie.director}</h5>
        </div>
      </article>
    </Link>
  );
}
