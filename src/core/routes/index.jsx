import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { PrivateLayout } from "../../layout";
import PublicLayout from "../../layout/PublicLayout";
import { useAuth } from "../store/authContext";
import { About, Error, Login, RegisterStudent } from "../../pages/public";
import { Contact, Courses, Home } from "../../pages/private";
import Profile from "../../pages/private/Profile";

function Routes() {
  const { user } = useAuth();
  const isAuthenticated = user || user?.access_token;
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <PrivateLayout /> : <PublicLayout />,
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
          path: "courses",
          element: isAuthenticated ? <Courses /> : <Login />,
        },
        {
          path: "profile",
          element: isAuthenticated ? <Profile /> : <Login />,
        },
        {
          path: "login",
          element: isAuthenticated ? <Navigate to="/" replace /> : <Login />,
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

export default Routes;
