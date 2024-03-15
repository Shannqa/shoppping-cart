import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import ErrorPage from "./ErrorPage.jsx";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/categories",
          element: <Categories />,
          children: [
            {
              path: "/:category",
              element: <Category />
            }
          ]
        }
      ]
    }
    ]);
  return <RouterProvider router={router} />
}

export default Router;