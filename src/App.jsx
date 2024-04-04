import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { PrivateLayout } from "./layout";
import { Error } from "./pages/public";
import { Contact, Courses, Home } from "./pages/private";
import { useAuth } from "./core/store/authContext";
import { Login, About } from "./pages/public";
import PublicLayout from "./layout/PublicLayout";
import RegisterStudent from "./pages/public/Register";

function App() {
  const { user } = useAuth();
  const router = createBrowserRouter([
    {
      path: "courses",
      element: !user ? <Navigate to="/login" /> : <PrivateLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "courses",
          element: <Courses />,
        },
      ],
    },
    {
      path: "/",
      element:
        user || user?.access_token ? <PrivateLayout /> : <PublicLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },

        {
          path: "login",
          element:
            user || user?.access_token ? (
              <Navigate to="/" replace />
            ) : (
              <Login />
            ),
        },
        {
          path: "register",
          element: user ? <Navigate to="/" replace /> : <RegisterStudent />,
        },
      ],
    },

    {
      path: "*",
      element: <div>not found</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
