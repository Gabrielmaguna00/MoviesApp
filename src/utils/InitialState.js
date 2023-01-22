import axios from "axios";

// const favouriteMovies= async ()=>{}

const getMovies = async () => {
  let movies = {
    popular: await (async function () {
      const aux = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_KEY_API_MOVIES
        }&language=en-US&page=1`
      );
      return await aux.data.results;
    })(),
    topRated: await (async function () {
      const aux = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_KEY_API_MOVIES
        }&language=en-US&page=1`
      );
      return await aux.data.results;
    })(),
    trending: await (async function () {
      const aux = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_KEY_API_MOVIES
        }&language=en-US&page=2`
      );
      return await aux.data.results;
    })(),
    horror: await (async function () {
      const aux = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_KEY_API_MOVIES
        }&language=en-US&query=horror&page=1&include_adult=false`
      );
      return await aux.data.results;
    })(),
    upComing: await (async function () {
      const aux = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_KEY_API_MOVIES
        }&language=en-US&page=1`
      );
      return await aux.data.results;
    })(),
  };
  // console.log("movies:", movies);
  return movies;
};
export default getMovies;
