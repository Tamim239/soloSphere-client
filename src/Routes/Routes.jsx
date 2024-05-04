import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MainLayout } from "../Layout/MainLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    //   errorElement: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ],
    },
  ]);