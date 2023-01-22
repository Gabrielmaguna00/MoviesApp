import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthProvider";
import { useMovieContext } from "../context/Movies";
import CardMovie from "../components/CardMovie";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function DetaillMovies() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState(false);
  const [trailer, setTrailer] = useState();
  const [review, setReview] = useState({ rating: 0, comentary: "" });
  const [like, setLike] = useState(false);
  const { user } = useAuthContext();
  const { movies, getMoviesReview } = useMovieContext();
  const getMovie = async () => {
    try {
      let movieInfo = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_KEY_API_MOVIES
        }&append_to_response=videos`
      );
      setMovie(movieInfo.data);
      const trailerid = movieInfo.data.videos.results.find(
        (video) => video.name === "Official Trailer"
      );
      setTrailer(trailerid ? trailerid : movieInfo.data.videos.results[0]);
      vote();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);
  useEffect(() => {
    vote();
  }, [movie, user]);
  useEffect(() => {
    fav();
  }, [id, movies]);

  const vote = async () => {
    if (movie !== undefined && movie.hasOwnProperty("id") && user) {
      const comentary = await getMoviesReview(
        movie.id.toString(),
        user.uid.toString()
      );
      typeof comentary === "object" ? setReview(comentary.review) : null;
    }
  };

  const fav = async () => {
    if (movies && movies.hasOwnProperty("favouriteMovies") && id) {
      const index = movies.favouriteMovies.findIndex((e) => e.id === id);
      index !== -1 ? setLike(true) : setLike(false);
    }
  };

  return (
    <div>
      <div className="relative h-scren z-[5]">
        <div className="absolute w-full h-screen top-0 left-0 bg-gradient-to-t from-black z-[2]"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie && (movie.backdrop_path || movie.poster_path)
          }`}
          alt={movie ? movie.title : undefined}
          className="absolute w-full h-screen object-cover z-[1]"
          onLoad={() => setLoading(false)}
        />
        <div className="absolute flex flex-col items-center w-screen h-screen md:pt-64 pt-20 z-[3]">
          <CardMovie
            movie={movie}
            like={like}
            setLike={setLike}
            trailer={trailer}
            review={review}
            setReview={setReview}
            id={id}
          />
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
