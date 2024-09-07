import { createContext, useContext, useReducer, useEffect } from "react";
import { songsReducer, initialSongsState } from "../reducers/songsReducer";
import { SongsContextProps } from "./types";
import songsData from "../data/songs.json";

const SongsContext = createContext<SongsContextProps>({
  songs: [],
  loading: false,
  error: null,
});

export const useSongs = () => useContext(SongsContext);

export const SongsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(songsReducer, initialSongsState);

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    setTimeout(() => {
      try {
        dispatch({ type: "LOAD_SONGS", payload: songsData });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: "Failed to load songs." });
      }
    }, 1000);
  }, []);

  const value = {
    songs: state.songs,
    loading: state.loading,
    error: state.error,
  };

  return (
    <SongsContext.Provider value={value}>{children}</SongsContext.Provider>
  );
};
