import React, { useContext } from "react";
import { Link } from "@reach/router";
import { Store } from "./Store";
import "./App.css";

interface IProps {
  children: any;
  path: string;
}

const App: React.FC<IProps> = ({ children }) => {
  const { state } = useContext(Store);

  return (
    <>
      <header className="header">
        <h1>Rick and Morty</h1>
        <div>
          <p>Pick your favourite episode!</p>
          <Link to="/">Home</Link>
          <Link to="/favs">
            {" "}
            You picked {state.favourites.length}{" "}
            {state.favourites.length === 1 ? "episode" : "episodes"}
          </Link>
        </div>
      </header>
      {children}
    </>
  );
};

export default App;
