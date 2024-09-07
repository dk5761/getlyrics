import { SongsState, SongsAction } from "./types";

export const songsReducer = (
  state: SongsState,
  action: SongsAction
): SongsState => {
  switch (action.type) {
    case "LOAD_SONGS":
      return {
        ...state,
        songs: action.payload,
        loading: false,
        error: null,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const initialSongsState: SongsState = {
  songs: [],
  loading: false,
  error: null,
};
