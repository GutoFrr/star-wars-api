import { Character } from '@/interfaces/character';

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  return (
    <div className="flex flex-col min-w-[268px] last:mr-16">
      <h3 className="text-white bg-theme-yellow py-2 px-4 text-sm font-medium rounded-t-[10px]">
        {character.name}
      </h3>
      <article className="py-2 px-4 border border-theme-gray-200 rounded-b-[10px] flex flex-col gap-3">
        <div>
          <h4 className="text-theme-gray-700 font-light text-xs mb-1">Data de Nascimento</h4>
          <h5 className="font-light text-[10px] text-theme-gray-700">{character.birth_year}</h5>
        </div>
        <div>
          <h4 className="text-theme-gray-700 font-light text-xs mb-1">Altura</h4>
          <h5 className="font-light text-[10px] text-theme-gray-700">{character.height}</h5>
        </div>
      </article>
    </div>
  );
}
