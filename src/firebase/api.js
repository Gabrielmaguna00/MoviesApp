import { doc, getDoc, arrayUnion, setDoc } from "firebase/firestore";

/**
 *
 * @param {*} db database connection
 * @param {*} id id of the movie
 * @returns returns the reviews of the movie (if any)
 */
// export const getComments = async (db, id) => {
//   const docRef = doc(db, "movies", id.toString());
//   const docSnap = await getDoc(docRef);
//   // console.log("data:", docSnap.data());
//   return docSnap.data();
// };
/**
 *
 * @param {*} e event
 * @param {*} db database connection
 * @param {*} user data the user
 * @param {*} setLike state change function
 * @param {*} movie data the movie
 * @param {*} navigate useNavigate hook function
 *
 * This function evaluates if the user is logged in through the user variable that comes from useAuthContext. If he is logged in, it adds the movie to his favorites list, otherwise it redirects him to the login
 */
export const favouriteMovie = async (e, db, user, setLike, movie, navigate) => {
  e.preventDefault();
  if (user && user.hasOwnProperty("uid")) {
    const usersCollection = doc(db, "users", user.uid);
    setLike(true);
    const data = {
      id: movie.id.toString(),
      backdrop_path: movie.backdrop_path,
      title: movie.title,
    };
    await setDoc(
      usersCollection,
      {
        movieFavourites: arrayUnion(data),
      },
      { merge: true }
    );
  } else {
    navigate("/signup");
  }
};
