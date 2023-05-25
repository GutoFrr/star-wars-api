'use client';

import { useSearch } from '@/context/SearchContext';
import Link from 'next/link';

export default function Search() {
  const { chars } = useSearch();

  if (chars.length == 0) {
    return (
      <div>
        <h2>Nenhum personagem encontrado...</h2>
        <Link href="/" className="text-blue-700 underline">
          Voltar à página inicial
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {chars.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-white bg-theme-yellow py-2 px-4 text-sm font-medium rounded-t-[10px]">
              {item.name}
            </h3>
            <article className="py-2 px-4 border border-theme-gray-200 rounded-b-[10px] flex flex-col gap-3">
              <div>
                <h4 className="text-theme-gray-700 font-light text-xs mb-1">Data de Nascimento</h4>
                <h5 className="font-light text-[10px] text-theme-gray-700">{item.birth_year}</h5>
              </div>
              <div>
                <h4 className="text-theme-gray-700 font-light text-xs mb-1">Altura</h4>
                <h5 className="font-light text-[10px] text-theme-gray-700">{item.height}</h5>
              </div>
            </article>
          </div>
        ))}
      </div>
      <div className="text-center pt-10">
        <Link href="/" className="text-blue-700 underline">
          Página inicial
        </Link>
      </div>
    </div>
  );
}
