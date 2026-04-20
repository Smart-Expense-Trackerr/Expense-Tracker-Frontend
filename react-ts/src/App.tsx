import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SignUp from "./auth/signup";
import Login from "./auth/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
       path: "/",
       element: <Home/>, 
      },
      {
        path: "signup",
        element: <SignUp/>,
      },
      {
        path: "login",
        element: <Login/>,
      }
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
)};