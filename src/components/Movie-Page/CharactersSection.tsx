import { Character } from '@/interfaces/character';
import Carousel from '../Carousel';
import Title from '../Title';

interface Props {
  characters: Character[];
}

export default function CharactersSection({ characters }: Props) {
  return (
    <section>
      <Title title="Characters of the movie" />
      <Carousel characters={characters} />
    </section>
  );
}
