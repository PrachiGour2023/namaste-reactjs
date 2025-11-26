import { useEffect, useState } from "react";
import RestaurantCard from "./components/RestaurantCard";
import Shimmer from "../../layouts/components/public/Shimmer.js";
import { useParams } from "react-router";

function RestaurantList() {
  const params = useParams();
  const { collection_id } = params;

  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7527421&lng=75.88371599999999&collection=${collection_id}&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
    );
    const data = await response.json();
    setFilteredRestaurants(data?.data?.cards);
    setRestaurants(data?.data?.cards);
  };

  return (
    <>
      <div className="mx-8">
        <div className="m-10">
          <h2 className="font-bold text-4xl">
            {restaurants[0]?.card?.card?.title}
          </h2>
          <p className="text-gray-600 font-medium text-lg mt-2">
            {restaurants[0]?.card?.card?.description}
          </p>
        </div>
        <div className="flex m-5 gap-4">
          <div className="w-100">
            <input
              placeholder="Search for restaurant and food"
              className="border border-gray-300 px-4 py-2 rounded-lg w-full"
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
        </div>
        <div className="grid grid-cols-4 gap-5 my-10">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.slice(3).map((restaurant, i) => (
              <div key={i}>
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))
          ) : (
            <Shimmer />
          )}
        </div>
      </div>
    </>
  );
}

export default RestaurantList;
