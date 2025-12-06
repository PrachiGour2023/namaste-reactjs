import { useCarouselScroll } from "../../../hooks/useCarouselScroll";
import { image_cdn_url } from "../../../utils/constant";
import { IoChevronBack, IoChevronForward, IoStar } from "react-icons/io5";
import { useSelector } from "react-redux";

const TopRestaurants = () => {
  const { scrollRef, scroll } = useCarouselScroll();
  const landingData = useSelector(
    (state) => state?.landing?.featuredRestaurants
  );
  if (!landingData?.cards?.[1]) return null;

  const {
    cards: {
      [1]: {
        card: { card: section },
      },
    },
  } = landingData;

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold my-5 dark:text-white">
          {section?.header?.title}
        </h3>
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
        {section?.gridElements?.infoWithStyle?.restaurants?.map(
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
                <h3 className="font-bold dark:text-white">
                  {restaurant?.info?.name}
                </h3>
                <div className="flex items-center gap-1 dark:text-white">
                  <p className="flex items-center gap-1">
                    <IoStar color="green" />
                    {restaurant?.info?.avgRating}
                  </p>{" "}
                  .
                  <p className="font-medium">
                    {restaurant?.info?.sla?.slaString}
                  </p>
                </div>
                <p className="text-gray-600 text-md dark:text-gray-300">
                  {restaurant?.info?.cuisines?.join(", ").substring(0, 30)}
                  {"... "}
                </p>
                <p className="text-gray-600 text-md dark:text-gray-300">
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
