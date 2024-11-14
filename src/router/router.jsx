import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Orders from "../components/Orders";
import PrivateRoute from "../components/PrivateRoute";
import SigninWithSocial from "../components/SigninWithSocial";
import SigninWithEmail from "../components/SigninWithEmail";
import SignupWithEmail from "../components/SignupWithEmail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <SignupWithEmail />,
      },
      {
        path: "/signin",
        element: <SigninWithSocial />,
      },
      {
        path: "/signin-with-email",
        element: <SigninWithEmail />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
