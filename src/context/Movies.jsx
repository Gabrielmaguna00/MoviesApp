import { useState, createContext, useContext } from "react";
import getMovies from "../utils/InitialState";
import { firestore as db } from "../firebase/index";
import { doc, getDoc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";

const MoviesContext = createContext();

const InitialState = await getMovies();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(InitialState);

  const setMoviesReview = async (movieId, user, review) => {
    const movieRef = doc(db, "movies", movieId.toString());
    const data = { name: user.name, review };
    await setDoc(movieRef, { [user.id]: data }, { merge: true });
  };

  const getMoviesReview = async (movieId, user) => {
    const collectionRef = doc(db, "movies", movieId);
    let document = await getDoc(collectionRef);
    document = document.data();
    if (typeof document === "object") {
      let key = Object.keys(document);
      if (key.includes(user)) {
        return document[user.toString()];
      } else false;
    }
  };

  const favouritesMovies = async (userId) => {
    const docRef = doc(db, "users", userId);
    const document = (await getDoc(docRef)).data();
    if (document.movieFavourites) {
      setMovies({ ...movies, favouriteMovies: document.movieFavourites });
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        setMoviesReview,
        getMoviesReview,
        favouritesMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
export const useMovieContext = () => useContext(MoviesContext);
//queremos guardar el voto y el comentario si existe, en la movie de firebase.
//Las peliculas se subiran a firebase indivualmente y esto ocurrira cuando un usuario visite el detalle y realice una Review
//al dar en submit, updatee o cree la pelicula con su id y el comentario
//si ya realizo un comentaio el usuario, debera actualizar el mismo y no subir otro
// const aux = [{review:{comentary:"testing", rating:"5"}, user:{id:"userId1", name:"user1"}},{review:{comentary:"testing", rating:"4"}, user:{id:"userId2", name:"user2"}},{review:{comentary:"testing", rating:"5"}, user:{id:"userId3", name:"user3"}}]
