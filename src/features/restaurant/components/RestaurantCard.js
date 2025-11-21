import React from "react";
import { image_cdn_url } from "../../../utils/constant";

function RestaurantCard(props) {
  const {
    restaurant: {
      card: {
        card: { info },
      },
    },
  } = props;

  return (
    <div className="res-card" key={info?.id}>
      <img
        className="res-logo"
        src={
          `${image_cdn_url}${info?.cloudinaryImageId}` ||
          "https://via.placeholder.com/150"
        }
      />
      <div className="res-details">
        <span className="res-food-heading">{info?.name}</span>
        <br />
        <span>
          ★{info?.avgRating} .
          <span className="res-delivery">{info?.sla?.slaString}</span>
        </span>
        <br />
        <span className="res-detail">{info?.cuisines.join(", ")}</span>
        <br />
        <span className="res-detail">{info?.areaName}</span>
      </div>
    </div>
  );
}

export default RestaurantCard;
