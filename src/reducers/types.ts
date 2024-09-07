import { Song } from "../types";

export interface SongsState {
  songs: Song[];
  loading: boolean;
  error: string | null;
}

export type SongsAction =
  | { type: "LOAD_SONGS"; payload: Song[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string };
