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
        <span className="text-lg font-bold dark:text-white">{info?.name}</span>
        <br />
        <span className="flex items-center dark:text-white">
          <IoStar color="green" />
          {info?.avgRating} .{" "}
          <span className="font-medium">{info?.sla?.slaString}</span>
        </span>
        <span className="text-gray-700 dark:text-gray-300">
          {info?.cuisines.join(", ").substring(0, 35)}
          {"... "}
        </span>
        <br />
        <span className="text-gray-700 dark:text-gray-300">
          {info?.areaName}
        </span>
      </div>
    </div>
  );
}

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-950 text-sm font-bold rounded-md p-1 text-white">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
