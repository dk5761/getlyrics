import { Link } from "react-router-dom";
import { useSongs } from "../context/SongsContext";

const Home = () => {
  const { songs, loading, error } = useSongs();

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Song List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song) => (
          <li
            key={song.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <Link
              to={`/song/${song.id}`}
              className="text-lg font-semibold hover:text-blue-500"
            >
              {song.title} - {song.artist}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
