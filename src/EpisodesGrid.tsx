import React from "react";
import { IEpisode } from "./interfaces/interfaces";
import EpisodeGridItem from "./EpisodeGridItem";

interface IProps {
  episodes: IEpisode[];
  fallback?: string;
}

const EpisodesGrid: React.FC<IProps> = ({ episodes, fallback }) => (
  <>
    {episodes.length === 0 ? (
      <div>{fallback}</div>
    ) : (
      episodes.map((episode: IEpisode) => (
        <EpisodeGridItem key={episode.id} episode={episode} />
      ))
    )}
  </>
);

export default EpisodesGrid;
