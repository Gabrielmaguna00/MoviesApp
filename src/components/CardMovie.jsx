import { useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import WatchTrailer from "./modals/WatchTrailer";
import { favouriteMovie } from "../firebase/api";
import Comments from "./modals/comments/Comments";
import { useMovieContext } from "../context/Movies";
import Vote from "./modals/Vote";
import { firestore as db } from "../firebase/index";
import { useAuthContext } from "../context/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function CardMovie({
  movie,
  like,
  setLike,
  trailer,
  review,
  setReview,
  id,
}) {
  const navigate = useNavigate();
  const [showTrailer, setShowTrailer] = useState(false);
  const [comments, setComments] = useState(null);
  const { user } = useAuthContext();
  const { movies, setMoviesReview, favouritesMovies } = useMovieContext();
  const getComments = async (db, id) => {
    const docRef = doc(db, "movies", id);
    const docSnap = (await getDoc(docRef)).data();
    if (docSnap) {
      setComments(Object.values(docSnap));
      console.log(comments);
    }
  };
  useEffect(() => {
    getComments(db, id);
  }, [id]);

  const desFavouriteMovie = async (e) => {
    e.preventDefault();
    if (
      user &&
      user.hasOwnProperty("uid") &&
      movies.hasOwnProperty("favouriteMovies")
    ) {
      const usersCollection = doc(db, "users", user.uid);
      const moviesFav = await movies.favouriteMovies.filter((e) => e.id !== id);
      setDoc(
        usersCollection,
        { movieFavourites: moviesFav },
        { merge: true }
      ).then((e) => setLike(false), favouritesMovies(user.uid));
    }
  };

  const rating = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (user) {
      const dataUser = { name: user.name, id: user.uid };
      await setMoviesReview(movie.id, dataUser, review);
      getComments(db, id);
    } else {
      navigate("/signup");
    }
  };
  return (
    <>
      <div className="flex md:flex-row  flex-col items-center ">
        <img
          className="w-[15rem] h-fit"
          src={`https://image.tmdb.org/t/p/original/${
            movie && movie.poster_path
          }`}
          alt={movie ? movie.title : undefined}
        />
        <div className="pl-3 text-base">
          <h1 className="text-3xl">{movie && movie.title}</h1>
          <div>
            <strong>
              <span className="flex items-center">
                {movie && movie.vote_average !== 0 && <FaStar />}
                {movie &&
                  movie.vote_average !== 0 &&
                  movie.vote_average.toPrecision(2)}
              </span>
            </strong>
            <p>
              <strong>Released:</strong>
              {movie && movie.release_date},{" "}
              {movie && movie.runtime !== 0 && movie.runtime + "m"}
            </p>
            <strong>
              <span>
                {movie &&
                  movie.genres.map(({ name }, index) => {
                    if (movie.genres.length - 1 !== index) return `${name}-`;
                    else return `${name}`;
                  })}
              </span>
            </strong>
          </div>
          <p className="w-80">{movie && movie.overview}</p>
          <WatchTrailer
            showTrailer={showTrailer}
            setShowTrailer={setShowTrailer}
            trailer={trailer}
          />
          {like ? (
            <button
              className="pl-2"
              onClick={(e) => {
                desFavouriteMovie(e);
              }}
            >
              <FaHeart />
            </button>
          ) : (
            <button
              className="pl-2"
              onClick={(e) => {
                favouriteMovie(e, db, user, setLike, movie, navigate);
              }}
            >
              <FaRegHeart />
            </button>
          )}
          <br />
          <div className="flex">
            <Vote review={review} rating={rating} submit={submit} />
            {comments ? <Comments comments={comments} /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
