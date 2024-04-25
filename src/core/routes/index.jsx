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

function Routes() {
  const { user } = useAuth();
  const router = createBrowserRouter([
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
          path: "courses",
          element: user || user?.access_token ? <Courses /> : <Login />,
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

export default Routes;
