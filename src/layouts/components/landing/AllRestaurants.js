import React, { useState, useEffect } from "react";
import { image_cdn_url, landing_page_api_url } from "../../../utils/constant";
import { IoStar } from "react-icons/io5";

const AllRestaurants = () => {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetchLandingPageApi();
  }, []);

  const fetchLandingPageApi = async () => {
    const response = await fetch(landing_page_api_url);
    const data = await response.json();
    setAppData(data?.data);
  };

  return (
    <div>
      <h3 className="text-xl font-bold my-5">
        {appData?.cards?.[2]?.card?.card?.title}
      </h3>
      <div className="grid grid-cols-4 gap-6 my-6">
        {appData?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (restaurant, index) => (
            <div key={index}>
              <img
                src={image_cdn_url + restaurant?.info?.cloudinaryImageId}
                className="w-50 h-30 object-cover rounded-lg"
                alt={""}
              />
              <div className="self-start">
                <h3 className="font-bold">{restaurant?.info?.name}</h3>
                <div className="flex items-center gap-1">
                  <p className="flex items-center gap-1">
                    <IoStar color="green" />
                    {restaurant?.info?.avgRating}
                  </p>{" "}
                  .
                  <p className="font-medium">
                    {restaurant?.info?.sla?.slaString}
                  </p>
                </div>
                <p className="text-gray-600 text-sm">
                  {restaurant?.info?.cuisines?.join(", ").substring(0, 30)}
                  {"... "}
                </p>
                <p className="text-gray-600 text-sm">
                  {restaurant?.info?.areaName}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AllRestaurants;
