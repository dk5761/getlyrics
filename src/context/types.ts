import { Song } from "../types";

export interface SongsContextProps {
  songs: Song[];
  loading: boolean;
  error: string | null;
}
