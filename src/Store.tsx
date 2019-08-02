import React, { useReducer } from "react";
import { IAction, IEpisode, IState } from "./interfaces/interfaces";

const initialState: IState = {
  episodes: [],
  favourites: []
};
export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "REMOVE_FAV":
      return {
        ...state,
        favourites: state.favourites.filter(
          (fav: IEpisode) => fav.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }: JSX.ElementChildrenAttribute) => {
  const [state, dispatch] = useReducer<IState | any>(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}> {children}</Store.Provider>
  );
};
