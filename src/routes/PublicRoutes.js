import { Suspense, lazy } from "react";
import React from "react";
import RestaurantList from "../features/restaurant/RestaurantList.js";
import { createBrowserRouter, Outlet } from "react-router";
import HomePageHeader from "../layouts/components/public/Header.js";
import LandingLayout from "../layouts/LandingLayout.js";
import NotFoundPage from "../pages/NotFoundPage.js";
import { ThemeProvider } from "../context/themeContext.js";
import { Provider } from "react-redux";
import { appStore } from "../redux/store/appStore.js";

const RestaurantMenu = lazy(() =>
  import("../features/restaurant/RestaurantMenu.js")
);

const CartItems = lazy(() => import("../features/cart/CartItems.js"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider>
        <PublicLayout />
      </ThemeProvider>
    ),
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
        path: "/restaurant-detail",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <CartItems />
          </Suspense>
        ),
      },
      {
        path: "/offer",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

function PublicLayout() {
  return (
    <Provider store={appStore}>
      <HomePageHeader />
      <Outlet />
    </Provider>
  );
}

export default PublicLayout;
