import { Movie } from '@/interfaces/movie';
import Title from '../Title';
import Image from 'next/image';

interface Props {
  movie: Movie;
}

export default function MovieSection({ movie }: Props) {
  return (
    <section className="grid grid-cols-6 gap-3 md:gap-x-3 lg:gap-0 px-10 mb-8">
      <div className="col-span-6">
        <Title title={movie.title} />
      </div>
      <div className="col-span-6 md:col-span-3 md:row-span-2">
        <h3 className="mb-2 md:mb-5 font-medium">Descrição</h3>
        <p className="text-sm">{movie.opening_crawl}</p>
      </div>
      <div className="col-span-6 sm:col-span-4 md:col-span-3 md:row-span-2 flex items-center justify-between">
        <h3 className="font-medium">Data de Lançamento</h3>
        <h4 className="text-sm">{movie.release_date}</h4>
      </div>
      <div className="col-span-3 sm:col-span-2 row-start-4 md:row-start-auto">
        <h3 className="font-medium mb-2">Diretor</h3>
        <h4 className="justify-self-end text-sm">{movie.director}</h4>
      </div>
      <div className="col-span-3 sm:col-span-2 md:col-span-1 row-start-4 md:row-start-auto justify-self-end text-end">
        <h3 className="font-medium mb-2">Produtor</h3>
        <h4 className="justify-self-end text-sm">{movie.producer}</h4>
      </div>
      <Image
        src={`/movie_posters/episode_${movie.episode_id}.jpg`}
        alt={movie.title}
        width={336}
        height={486}
        priority
        className="rounded-2xl object-cover col-span-6 row-start-3 sm:col-span-2 sm:col-start-5 sm:row-span-2 md:row-start-2 md:row-span-5 md:justify-self-end"
      />
    </section>
  );
}
