import { useParams, Navigate } from "react-router-dom";
import { useSongs } from "../context/SongsContext";

const SongDetails = () => {
  const { id } = useParams();
  const { songs, loading, error } = useSongs();
  const songId = Number(id);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const song = songs.find((song) => song.id === songId);

  if (!song) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{song.title}</h1>
      <h2 className="text-xl font-semibold text-gray-600 mb-6">
        By {song.artist}
      </h2>
      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-lg shadow">
        {song.lyrics}
      </pre>
    </div>
  );
};

export default SongDetails;
