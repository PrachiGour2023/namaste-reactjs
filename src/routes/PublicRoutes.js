import { Suspense, lazy } from "react";
import React from "react";
import RestaurantList from "../features/restaurant/RestaurantList.js";
import LoginPage from "../pages/LoginPage";
import { createBrowserRouter, Outlet } from "react-router";
import HomePageHeader from "../layouts/components/public/Header.js";
import LandingLayout from "../layouts/LandingLayout.js";
import NotFoundPage from "../pages/NotFoundPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <LandingLayout />,
      },
      {
        path: "/category/:collection_id",
        element: <RestaurantList />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/offer",
        element: <RestaurantList />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

function PublicLayout() {
  return (
    <>
      <HomePageHeader />
      <Outlet />
    </>
  );
}

export default PublicLayout;
