import React, { useContext } from "react";
import { Store } from "./Store";
import { IEpisode } from "./interfaces/interfaces";
import { toggleFavAction } from "./actions/actions";

interface IProps {
  episode: IEpisode;
}

const EpisodeGridItem: React.FC<IProps> = ({ episode }) => {
  const { state, dispatch } = useContext(Store);
  const handleClick = () => {
    toggleFavAction(state, episode, dispatch);
  };
  return (
    <section className="episode-box">
      <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
      <div>{episode.name}</div>
      <section className="episode-description">
        <div>
          Season: {episode.season} Number: {episode.number}
        </div>
        <button type="button" onClick={handleClick}>
          {state.favourites.find((fav: IEpisode) => fav.id === episode.id)
            ? "Unfav"
            : "Fav"}
        </button>
      </section>
    </section>
  );
};

export default EpisodeGridItem;
