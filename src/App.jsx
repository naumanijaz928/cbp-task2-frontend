import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Layout } from "./layout";
import { Error } from "./pages/public";
import { About, Contact, Courses, Home } from "./pages/private";
import { useAuth } from "./core/store/authContext";
import { Login } from "./pages/public";
import PublicLayout from "./layout/PublicLayout";

function App() {
  const { user } = useAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: !user ? <Navigate to="/login" /> : <Layout />,
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
          element: <Courses />,
        },
      ],
    },
    {
      element:
        !user || !user?.access_token ? <PublicLayout /> : <Navigate to="/" />,
      errorElement: <Error />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        // {
        //   path: "forgot-password",
        //   element: <ForgotPassword />,
        // },
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
