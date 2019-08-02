import { IState, IEpisode, IAction } from "../interfaces/interfaces";

export type Dispatch = React.Dispatch<IAction>;

export const fetchDataAction = async (dispatch: Dispatch, URL: string) => {
  const data = await fetch(URL);
  const response = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: response._embedded.episodes
  });
};

export const toggleFavAction = (
  state: IState,
  episode: IEpisode,
  dispatch: Dispatch
): void => {
  const episodeInFav = state.favourites.includes(episode);
  const type = episodeInFav ? "REMOVE_FAV" : "ADD_FAV";

  return dispatch({
    type,
    payload: episode
  });
};
