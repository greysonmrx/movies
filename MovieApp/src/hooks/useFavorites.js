import { useCallback, useState } from "react";
import movies from "../assets/movies";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchFavorites = useCallback(() => {
    console.log("fetchFavorites");
    setLoading(true);
    setTimeout(() => {
      setFavorites(movies);
      setLoading(false);
    }, 2000);
  }, []);

  return {
    favorites,
    isLoading,
    fetchFavorites,
  };
};
