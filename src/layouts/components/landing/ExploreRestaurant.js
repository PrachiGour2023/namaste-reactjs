import CommonListUI from "./CommonListUI";
import { useRestaurantData } from "../../../hooks/useRestaurantData";

const ExploreRestaurant = () => {
  const restaurantData = useRestaurantData();
  if (!restaurantData.cards) return null;
  const {
    cards: {
      [8]: {
        card: { card: section },
      },
    },
  } = restaurantData;

  return (
    <div>
      <h3 className="text-xl font-bold my-5 dark:text-white">
        {section?.title}
      </h3>
      <div className="grid grid-cols-4 gap-6 my-10">
        {section?.brands?.map((brand, index) => (
          <div key={index}>
            <CommonListUI title={brand?.text} link={brand?.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreRestaurant;
