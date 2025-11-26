import { image_cdn_url } from "../../../utils/constant";
import { IoStar } from "react-icons/io5";

function RestaurantCard(props) {
  const {
    restaurant: {
      card: {
        card: { info },
      },
    },
  } = props;

  return (
    <div key={info?.id}>
      <img
        className="w-70 h-50 object-cover mb-2 rounded-lg"
        src={
          `${image_cdn_url}${info?.cloudinaryImageId}` ||
          "https://via.placeholder.com/150"
        }
      />
      <div className="justify-start">
        <span className="text-lg font-bold">{info?.name}</span>
        <br />
        <span className="flex items-center">
          <IoStar color="green" />
          {info?.avgRating} .{" "}
          <span className="font-medium">{info?.sla?.slaString}</span>
        </span>
        <span className="text-gray-700">
          {info?.cuisines.join(", ").substring(0, 35)}
          {"... "}
        </span>
        <span className="text-gray-700">{info?.areaName}</span>
      </div>
    </div>
  );
}

export default RestaurantCard;
