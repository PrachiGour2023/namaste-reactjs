import { useState, useEffect } from "react";
import { landing_page_api_url } from "../../../utils/constant";
import CommonListUI from "./CommonListUI";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";

const BestCuisines = () => {
  const [appData, setAppData] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const landingData = useSelector(
    (state) => state?.landing?.featuredRestaurants
  );

  useEffect(() => {
    setAppData(landingData?.cards?.[7]?.card?.card);
  }, [showAll, landingData]);

  const visibleData = showAll ? appData?.brands : appData?.brands?.slice(0, 11);

  return (
    <div>
      <h3 className="text-xl font-bold my-5 dark:text-white">
        {appData?.title}
      </h3>
      <div className="grid grid-cols-4 gap-6 my-10">
        {visibleData?.map((brand, index) => (
          <div key={index}>
            <CommonListUI title={brand?.text} link={brand?.link} />
          </div>
        ))}
        {!showAll && appData?.brands?.length > 11 && (
          <button
            className="bg-orange-400 h-15 rounded-md self-center cursor-pointer"
            onClick={() => setShowAll(!showAll)}
          >
            <p className="flex justify-center items-center text-white font-bold">
              Show more <IoIosArrowDown />
            </p>
          </button>
        )}
      </div>
    </div>
  );
};
export default BestCuisines;
