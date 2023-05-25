'use client';

import { useSearch } from '@/context/SearchContext';

export default function Search() {
  const { getQueriedCharacters, search, setSearch } = useSearch();

  return (
    <form className="w-full sm:w-fit" onSubmit={getQueriedCharacters}>
      <input
        name="search"
        type="text"
        placeholder="Pesquisar personagens..."
        className="w-full sm:w-72 rounded py-1.5 px-2.5 placeholder:text-end text-end"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
