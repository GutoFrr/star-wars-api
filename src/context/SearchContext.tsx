'use client';

import { Character } from '@/interfaces/character';
import { EventHandler } from '@/interfaces/handleSubmit';
import { ISearchContext } from '@/interfaces/searchContext';
import { clientSideRequest } from '@/services/request';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';

const SearchContext = createContext({} as ISearchContext);

interface Props {
  children: ReactNode;
}

export const useSearch = () => useContext(SearchContext);

export function SearchProvider({ children }: Props) {
  const [search, setSearch] = useState('');
  const [chars, setChars] = useState<Character[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  async function getCharacters(query: string) {
    const data = await clientSideRequest(`/people/?search=${query}`, { cache: 'no-store' });

    return data.results as Character[];
  }

  const getQuery = useCallback(async () => {
    if (search === '') {
      router.push('/');
    } else {
      router.push('/search');
    }
    try {
      const data = await getCharacters(search!);

      return data;
    } catch (error) {
      console.log(error);
    }
  }, [router, search]);

  async function getQueriedCharacters(e: EventHandler) {
    e.preventDefault();
    try {
      const data = await getQuery();
      setChars(data!);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setSearch('');
  }, [pathname]);

  return (
    <SearchContext.Provider value={{ search, setSearch, getQueriedCharacters, chars }}>
      {children}
    </SearchContext.Provider>
  );
}
