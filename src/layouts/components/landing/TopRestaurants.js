import { useState, useEffect } from "react";
import { useCarouselScroll } from "../../../hooks/useCarouselScroll";
import { landing_page_api_url, image_cdn_url } from "../../../utils/constant";
import { IoChevronBack, IoChevronForward, IoStar } from "react-icons/io5";

const TopRestaurants = () => {
  const [appData, setAppData] = useState([]);
  const { scrollRef, scroll } = useCarouselScroll();

  useEffect(() => {
    fetchLandingPageApi();
  }, []);

  const fetchLandingPageApi = async () => {
    const response = await fetch(landing_page_api_url);
    const data = await response.json();
    setAppData(data?.data?.cards[1]?.card?.card);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold my-5">{appData?.header?.title}</h3>
        <div>
          <button
            onClick={() => scroll("left")}
            className="h-8 mx-2 bg-white shadow-md rounded-full hover:scale-105 transition"
          >
            <IoChevronBack size={22} />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="h-8 mx-2 bg-white shadow-md rounded-full hover:scale-105 transition"
          >
            <IoChevronForward size={22} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto overflow-x-hidden scroll-smooth scrollbar-hide snap-x snap-mandatory px-12 my-10"
      >
        {appData?.gridElements?.infoWithStyle?.restaurants?.map(
          (restaurant) => (
            <div
              key={restaurant?.info?.id}
              className="flex flex-col items-center snap-start min-w-[230px] cursor-pointer"
            >
              <img
                src={image_cdn_url + restaurant?.info?.cloudinaryImageId}
                alt={""}
                className="w-80 h-40 object-cover rounded-lg"
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
                <p className="text-gray-600 text-md">
                  {restaurant?.info?.cuisines?.join(", ").substring(0, 30)}
                  {"... "}
                </p>
                <p className="text-gray-600 text-md">
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

export default TopRestaurants;
