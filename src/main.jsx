import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Root from "./Pages/Root";
import ErrorPage from "./error-page";
import AddProduct from "./Pages/AddProduct";
import Cart from "./Pages/Cart";
import SingIn from "./Pages/SingIn";
import SingUp from "./Pages/SingUp";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import ShowBrand from "./Pages/ShowBrand";
import ShowProductDetails from "./Pages/ShowProductDetails";
import UpdateProducts from "./Pages/UpdateProducts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/myCart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: "/login",
        element: <SingIn></SingIn>
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>
      },
      {
        path: '/showBrand/:brand',
        element: <PrivateRoute><ShowBrand></ShowBrand></PrivateRoute>,
        loader: ({ params }) => {
          return fetch(`http://localhost:7000/product/${params.brand}`);
        },
      },
      {
        path: '/showBrand/brandDetails/:id',
        element: <PrivateRoute><ShowProductDetails></ShowProductDetails></PrivateRoute>,
        loader: ({ params }) => {
          return fetch(`http://localhost:7000/productDetails/${params.id}`)
        }
      },
      {
        path: '/updateBrand/:id',
        element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
        loader: ({ params }) => {
          console.log(params);
          return fetch(`http://localhost:7000/productDetails/${params.id}`)
        }
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);