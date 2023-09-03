import { Character } from '@/interfaces/character';
import { serverSideRequest } from '@/services/request';
import Carousel from './Carousel';

export default async function Characters() {
  const characters = await getCharacters();

  return <Carousel characters={characters} />;
}

async function getCharacters() {
  const data = await serverSideRequest('/people', {
    next: {
      revalidate: 10,
    },
  });

  return data.results as Character[];
}
