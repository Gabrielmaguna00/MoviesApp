import React from "react";
import { useEffect, useState } from "react";
import { useMovieContext } from "../context/Movies";
import { Link } from "react-router-dom";

const Main = ({setLoading}) => {
  const [movie, setMovie] = useState();
  const { movies } = useMovieContext();
  const selectMovie = () => {
    if (movies.hasOwnProperty("popular")) {
      const movieMain =
        movies.popular[Math.floor(Math.random() * movies.popular.length)];
      setMovie(movieMain);
    }
  };
  useEffect(() => {
    selectMovie();
  }, []);
  //   console.log(movie);

  // Reduce description length
  const truncateString = (string, num) => {
    if (string?.length > num) {
      return string.slice(0, num) + "...";
    } else {
      return string;
    }
  };
  
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?movie.title:undefined}
          onLoad={()=>setLoading(false)}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            {/* <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5"
            onClick={(e)=>{favouriteMovie}}>
              Fav
            </button> */}
            <Link to={movie && `./movie/${movie.id}`}>
              <button className="border text-white border-gray-300 py-2 px-5">
                See More...
              </button>
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 185)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
