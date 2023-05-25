import { Dispatch, SetStateAction } from 'react';
import { Character } from './character';
import { EventHandler } from './handleSubmit';

export interface ISearchContext {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  getQueriedCharacters: (e: EventHandler) => Promise<void>;
  chars: Character[];
}
