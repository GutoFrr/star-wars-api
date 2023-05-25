'use client';

import { Character } from '@/interfaces/character';
import { Movie } from '@/interfaces/movie';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import CharacterCard from './CharacterCard';
import MovieCard from './MovieCard';
import ScrollPrev from './ScrollPrev';
import ScrollNext from './ScrollNext';

interface Props {
  movies?: Movie[];
  characters?: Character[];
}

export default function Carousel({ movies, characters }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div
        className="overflow-hidden mx-auto xl:w-[932px] lg:w-[600px] md:w-[600px] sm:w-[268px] w-[268px] mb-14"
        ref={emblaRef}>
        <div className="flex gap-16 w-full">
          {movies
            ? movies
                .sort((a, b) => a.episode_id - b.episode_id)
                .map((item, index) => <MovieCard key={item.episode_id} movie={item} />)
            : characters
            ? characters.map((item, index) => <CharacterCard key={index} character={item} />)
            : null}
        </div>
      </div>
      <ScrollPrev scroll={scrollPrev} />
      <ScrollNext scroll={scrollNext} />
    </div>
  );
}
