import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./components/RestaurantCard";
import Shimmer from "../../layouts/components/public/Shimmer.js";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantsList } from "../../redux/slices/landing/landingActions.js";

function RestaurantList() {
  const params = useParams();
  const { collection_id } = params || {};
  const dispatch = useDispatch();
  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const restaurantList = useSelector((state) => state.landing.restaurantList);

  useEffect(() => {
    dispatch(fetchRestaurantsList(collection_id));
  }, []);

  useEffect(() => {
    setRestaurants(restaurantList?.cards);
    setFilteredRestaurants(restaurantList?.cards);
  }, [restaurantList]);

  return (
    <div className="dark:bg-black">
      <div className="px-8">
        <div className="p-10">
          <h2 className="font-bold text-4xl dark:text-white">
            {restaurants?.[0]?.card?.card?.title}
          </h2>
          <p className="text-gray-600 font-medium text-lg mt-2 dark:text-gray-300">
            {restaurants?.[0]?.card?.card?.description}
          </p>
        </div>
        {/* <div className="flex m-5 gap-4">
          <div className="w-100">
            <input
              placeholder="Search for restaurant and food"
              className="border border-gray-300 px-4 py-2 rounded-lg w-full dark:text-gray-200"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <button
            className="bg-orange-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            onClick={() => {
              const filteredData = restaurants.filter((res) =>
                res?.card?.card?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredData);
            }}
          >
            Filter
          </button>
        </div> */}
        <div className="grid grid-cols-4 gap-5 py-10">
          {filteredRestaurants?.length > 0 ? (
            filteredRestaurants.slice(3).map((restaurant, i) => {
              return (
                <Link key={i} to={""}>
                  {restaurant?.card?.card?.info?.promoted ? (
                    <RestaurantCardWithPromotedLabel restaurant={restaurant} />
                  ) : (
                    <RestaurantCard restaurant={restaurant} />
                  )}
                </Link>
              );
            })
          ) : (
            <Shimmer />
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantList;
