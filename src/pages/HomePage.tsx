import React, { useContext, useEffect, Suspense, lazy } from "react";
import { Store } from "../Store";
import Loader from "../Loader";
import { fetchDataAction } from "../actions/actions";
const EpisodesGrid = lazy(() => import("../EpisodesGrid"));

const HomePage: React.FC = () => {
  const { state, dispatch } = useContext(Store);

  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch, URL);
  });

  return (
    <Suspense fallback={<Loader />}>
      <section className="episode-layout">
        <EpisodesGrid
          episodes={state.episodes}
          fallback="something went wrong, please refresh page"
        />
      </section>
    </Suspense>
  );
};

export default HomePage;
