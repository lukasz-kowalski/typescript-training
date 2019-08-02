export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
  _links: { self: { href: string }; previousepisode: { href: string } };
  type: string;
  language: string;
  genres: string[];
  status: string;
  premiered: string;
  officialSite: string;
  schedule: { time: string; days: string[] };
  rating: { average: number };
  weight: number;
  network: {
    id: number;
    name: string;
    country: { name: string; code: string; timezone: string };
  };
  webChannel: string | null;
  externals: { tvrage: number; thetvdb: number; imdb: string };
  updated: number;
}

export interface IAction {
  type: string;
  payload: IEpisode;
}

export interface IState {
  episodes: IEpisode[];
  favourites: IEpisode[];
}
