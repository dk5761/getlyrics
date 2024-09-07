import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/ui/layout";
import Home from "./pages/Home";
import SongDetails from "./pages/SongDetails";
import NotFound from "./pages/NotFound";
import { SongsProvider } from "./context/SongsContext";

// Define routes as an array of objects (JSON-based routing)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout that contains the header, footer, etc.
    children: [
      {
        path: "/",
        element: <Home />, // Home page at '/'
      },
      {
        path: "song/:id", // Dynamic song details route
        element: <SongDetails />,
      },
      {
        path: "404",
        element: <NotFound />, // 404 page for invalid song ID
      },
      {
        path: "*", // Catch-all for undefined routes
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <SongsProvider>
      <RouterProvider router={router} />
    </SongsProvider>
  );
};

export default App;
