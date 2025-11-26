import React, { useState, useEffect } from "react";
import { landing_page_api_url, image_cdn_url } from "../../../utils/constant";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useCarouselScroll } from "../../../hooks/useCarouselScroll";
import { Link } from "react-router";

const FoodCategory = () => {
  const [appData, setAppData] = useState([]);
  const { scrollRef, scroll } = useCarouselScroll();

  useEffect(() => {
    fetchLandingPageApi();
  }, []);

  const fetchLandingPageApi = async () => {
    const response = await fetch(landing_page_api_url);
    const data = await response.json();
    setAppData(data?.data?.cards[0]?.card?.card);
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
        className="flex gap-10 overflow-x-auto overflow-x-hidden scroll-smooth scrollbar-hide snap-x snap-mandatory px-12"
      >
        {appData?.imageGridCards?.info?.map((item) => {
          const queryString = item?.entityId?.split("?")[1];
          const params = new URLSearchParams(queryString);
          const collection_id = params.get("collection_id");
          console.log(collection_id);

          return (
            <div
              key={item?.id}
              className="flex flex-col items-center snap-start min-w-[150px] cursor-pointer"
            >
              <Link to={`/category/${collection_id}`}>
                <img
                  src={image_cdn_url + item?.imageId}
                  alt={""}
                  className="w-50 h-50 object-contain"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodCategory;
