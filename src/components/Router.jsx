import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Categories from "./Categories.jsx";
import Category from "./Category.jsx";
import Product from "./Product.jsx";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/categories",
          element: <Categories />,
          children: [
            {
              path: "/categories/:category",
              element: <Category />
            }
          ]
        },
        {
          path: "/products/:product",
          element: <Product />
        }
      ]
    }
    ]);
  return <RouterProvider router={router} />
}

export default Router;