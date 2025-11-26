import React, { useEffect, useState } from "react";
import FoodCategory from "./components/landing/FoodCategory";
import TopRestaurants from "./components/landing/TopRestaurants";
import AllRestaurants from "./components/landing/AllRestaurants";
import RestaurantOfVariousCities from "./components/landing/RestaurantOfCities";
import BestCuisines from "./components/landing/BestCuisine";
import ExploreRestaurant from "./components/landing/ExploreRestaurant";

function LandingLayout() {
  return (
    <div className="grid grid-cols-1 divide-y-[1px] divide-gray-500 mx-45">
      <FoodCategory />
      <TopRestaurants />
      <AllRestaurants />
      <RestaurantOfVariousCities />
      <BestCuisines />
      <ExploreRestaurant />
    </div>
  );
}

export default LandingLayout;
