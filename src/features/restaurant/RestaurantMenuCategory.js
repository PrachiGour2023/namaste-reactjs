import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { image_cdn_url } from "../../utils/constant";
import { FaRupeeSign, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../../redux/slices/cart/cartSlice";

const ResturantMenuCategory = (props) => {
  const data = props?.data?.card?.card;

  const handleAccordian = () => {
    props.setMenuIndex();
  };

  return (
    <div className="p-5">
      <div
        className="flex justify-between items-center"
        onClick={() => handleAccordian()}
      >
        <h3 className="font-bold text-lg">
          {data?.title} ({data?.itemCards?.length})
        </h3>
        <IoIosArrowDown size={25} />
      </div>
      {data?.itemCards?.map((item, i) => {
        return (
          <div key={i} className="mb-8">
            {props?.collapseMenu && <MenuItem menu={item} />}
          </div>
        );
      })}
    </div>
  );
};

export default ResturantMenuCategory;

const MenuItem = (props) => {
  const data = props?.menu?.card?.info;
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="flex justify-between items-center my-5 mb-3 border-b border-gray-200 pb-5">
      <div className="flex-col">
        <p className="text-gray-700 font-bold text-lg">{data?.name}</p>
        <p className="flex items-center font-bold">
          <FaRupeeSign size={14} />
          {data?.defaultPrice ? data.defaultPrice / 100 : data?.price / 100}
        </p>
        <p className="flex items-center my-2 text-sm text-green-700 font-semibold">
          <FaStar color="green" size={13} />
          {data?.ratings?.aggregatedRating?.rating}(
          {data?.ratings?.aggregatedRating?.ratingCountV2})
        </p>
        {!showMore && (
          <p
            className="text-gray-500 font-medium text-sm w-3/4 cursor-pointer"
            onClick={handleShowMore}
          >
            {data?.description.substring(0, 150)}
            {"... more"}
          </p>
        )}
        {showMore && (
          <p className="text-gray-500 font-medium text-sm w-3/4">
            {data?.description}
          </p>
        )}
      </div>
      <div className="relative aspect-square w-32 h-32">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image_cdn_url + data.imageId}
        />
        {!cartItems.includes(data?.name) ? (
          <button
            className="absolute bottom-1 right-2 bg-white text-black cursor-pointer font-semibold px-10 py-1 rounded shadow text-green-500 hover:bg-gray-200"
            onClick={() => dispatch(addItems(data?.name))}
          >
            ADD
          </button>
        ) : (
          <button
            className="absolute bottom-1 right-2 bg-white text-black cursor-pointer font-semibold px-6 py-1 rounded shadow text-green-500 hover:bg-gray-200"
            onClick={() => dispatch(removeItems(data?.name))}
          >
            REMOVE
          </button>
        )}
      </div>
    </div>
  );
};
