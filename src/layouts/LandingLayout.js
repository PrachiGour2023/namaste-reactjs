import React, { useContext, useEffect, useState } from "react";
import FoodCategory from "./components/landing/FoodCategory";
import TopRestaurants from "./components/landing/TopRestaurants";
import AllRestaurants from "./components/landing/AllRestaurants";
import RestaurantOfVariousCities from "./components/landing/RestaurantOfCities";
import BestCuisines from "./components/landing/BestCuisine";
import ExploreRestaurant from "./components/landing/ExploreRestaurant";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { ThemeContext } from "../context/themeContext";
import { useDispatch } from "react-redux";
import { fetchFeaturedRestaurants } from "../redux/slices/landing/landingActions";

function LandingLayout() {
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeaturedRestaurants());
  }, []);

  if (!onlineStatus) {
    return (
      <h1 className="font-bold text-center text-2xl my-20">
        Seems like you are offline !! Please check the internet
      </h1>
    );
  }

  return (
    <div className="dark:bg-black">
      <div className="grid grid-cols-1 divide-y-[1px] divide-gray-500 mx-45">
        <FoodCategory />
        <TopRestaurants />
        <AllRestaurants />
        <RestaurantOfVariousCities />
        <BestCuisines />
        <ExploreRestaurant />
      </div>
    </div>
  );
}

export default LandingLayout;
