import { useState } from "react";
import apiMovies from "../assets/movies";

export const useSearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchMovies = () => {
    setLoading(true);
    setTimeout(() => {
      setMovies(apiMovies);
      setLoading(false);
    }, 1000);
  };

  return {
    isLoading,
    movies,
    fetchMovies,
  };
};
