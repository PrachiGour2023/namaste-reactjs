import React, { useEffect } from "react";
import { landing_page_api_url } from "../utils/constant";

export const useRestaurantData = () => {
  const [restaurantData, setRestaurantData] = React.useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(landing_page_api_url);
      const data = await response.json();
      setRestaurantData(data?.data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };
  return restaurantData;
};
