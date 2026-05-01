import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignUp from "./auth/signup";
import Login from "./auth/login";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";

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
      },
      {
        path: "dashboard",
        element: <Dashboard/>,
        children : [
          {
            path: "expenses",
            element: <Expenses/>
        } 
        ]
      }
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
)};