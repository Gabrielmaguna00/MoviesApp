import React, {useState} from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import { useMovieContext } from "../context/Movies";
import { useAuthContext } from "../context/AuthProvider";
import { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Home() {
  const [loading, setLoading]=useState(true)
  const { movies, favouritesMovies } = useMovieContext();
  const { user } = useAuthContext();
  const getFavouritesMovies = () => {
    if (user && user.hasOwnProperty("uid")) {
      favouritesMovies(user.uid);
    }
  };
  useEffect(()=>getFavouritesMovies(),[user])
  return (
    <div >
      <Main setLoading={setLoading}/>
      {user && movies.favouriteMovies && movies.favouriteMovies.length > 0 ? (
        <Row
          title="Favourites Movies"
          movies={movies && movies.favouriteMovies}
        />
      ) : null}
      <Row title="Up Coming" movies={movies && movies.upComing} />
      <Row title="Popular" movies={movies && movies.popular} />
      <Row title="Trending" movies={movies && movies.trending} />
      <Row title="TopRated" movies={movies && movies.topRated} />
      <Row title="Horror" movies={movies && movies.horror} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Home;