import React, { useContext, Suspense, lazy } from "react";
import { Store } from "../Store";
import Loader from "../Loader";
const EpisodesGrid = lazy(() => import("../EpisodesGrid"));

const FavPage: React.FC = () => {
  const { state } = useContext(Store);

  return (
    <Suspense fallback={<Loader />}>
      <div className="episode-layout">
        <EpisodesGrid
          episodes={state.favourites}
          fallback="You didn't add any favourite episodes"
        />
      </div>
    </Suspense>
  );
};

export default FavPage;
