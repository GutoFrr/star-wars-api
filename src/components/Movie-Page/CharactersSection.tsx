import { Character } from '@/interfaces/character';
import Carousel from '../Carousel';
import Title from '../Title';

interface Props {
  characters: Character[];
}

export default function CharactersSection({ characters }: Props) {
  return (
    <section>
      <Title title="Personagens do filme" />
      <Carousel characters={characters} />
    </section>
  );
}
