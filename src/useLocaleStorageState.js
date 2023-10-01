import { useState, useEffect } from "react";

export function useLocaleStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    const storedMovies = localStorage.getItem(key);
    return storedMovies ? JSON.parse(storedMovies) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
