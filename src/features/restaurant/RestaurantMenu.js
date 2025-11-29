import { useEffect, useState } from "react";
import { MenuData } from "../../utils/constant";
import { IoStar } from "react-icons/io5";

const RestaurantMenu = () => {
  return (
    <div className="mx-70 my-10">
      <p className="text-2xl font-bold">
        {MenuData[0]?.card?.card?.info?.name}
      </p>
      <div className="border border-gray-200 rounded-lg my-7 p-5 shadow-md">
        <div className="flex gap-2 items-center">
          <IoStar color="green" />
          <span className="font-medium">
            {MenuData[0]?.card?.card?.info?.avgRatingString} (
            {MenuData[0]?.card?.card?.info?.totalRatingsString})
          </span>{" "}
          .
          <span className="font-medium">
            {MenuData[0]?.card?.card?.info?.costForTwoMessage}
          </span>
        </div>
        <p className="text-sm text-orange-500 font-bold underline my-2">
          {MenuData[0]?.card?.card?.info?.cuisines.join(", ")}
        </p>
        <p className="flex font-bold gap-2 items-center">
          Outlet{" "}
          <span className="text-gray-500 text-sm font-medium">
            {MenuData[0]?.card?.card?.info?.areaName},{" "}
          </span>
        </p>
        <p className="font-bold text-sm">
          {MenuData[0]?.card?.card?.info?.sla?.slaString}
        </p>
      </div>
      <p className="text-2xl font-bold">Deals for you</p>
      <div>
        <div>
          {MenuData[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.map(
            (item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-gray-200 py-5"
              >
                <div>
                  <p className="font-bold">{item?.info?.header}</p>
                  <p className="text-sm text-gray-600">
                    {item?.info?.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
