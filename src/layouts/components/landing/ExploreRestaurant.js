import React, { useState, useEffect } from "react";
import { landing_page_api_url } from "../../../utils/constant";
import CommonListUI from "./CommonListUI";

const ExploreRestaurant = () => {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetchLandingPageApi();
  }, []);

  const fetchLandingPageApi = async () => {
    const response = await fetch(landing_page_api_url);
    const data = await response.json();
    setAppData(data?.data?.cards[8]?.card?.card);
  };
  return (
    <div>
      <h3 className="text-xl font-bold my-5">{appData?.title}</h3>
      <div className="grid grid-cols-4 gap-6 my-10">
        {appData?.brands?.map((brand, index) => (
          <div key={index}>
            <CommonListUI title={brand?.text} link={brand?.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreRestaurant;
