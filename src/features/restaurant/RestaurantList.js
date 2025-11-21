import React from "react";
import "./style.css";
import HomePageHeader from "../../layouts/components/public/Header.js";
import RestaurantCard from "./components/RestaurantCard";
import { foodData } from "../../utils/constant";

function RestaurantList() {
  return (
    <>
      <HomePageHeader />
      <div className="body">
        <div className="food-category">
          <h2 className="food-title">{foodData[0]?.card?.card?.title}</h2>
          <p className="food-detail">{foodData[0]?.card?.card?.description}</p>
        </div>
        <div className="search">
          <input
            placeholder="Search for restaurant and food"
            className="search-input"
          />
        </div>
        <div className="res-container">
          {foodData.slice(2).map((restaurant, i) => (
            <div key={i}>
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RestaurantList;
