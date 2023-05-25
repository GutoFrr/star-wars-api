export interface Movie {
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  characters?: [];
  producer?: string;
  opening_crawl?: string;
  url?: string;
  urlId?: string;
}
