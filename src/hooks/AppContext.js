import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useMovieContext = () => useContext(AppContext);

export const useMovieList = thisCollapse => {
  const [movies, setMovies] = useState(thisCollapse);

  const setMovieList = movies => {
    setMovies(movies);
  }

  return { movies, setMovieList };
}