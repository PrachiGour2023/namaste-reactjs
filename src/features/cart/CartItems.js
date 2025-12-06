import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegSadCry } from "react-icons/fa";
import { clearItem, removeItems } from "../../redux/slices/cart/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state?.cart?.items);
  console.log(cartItem);

  const handleRemoveItem = (item) => {
    dispatch(removeItems(item));
  };

  return (
    <div className="mx-70 my-10">
      {cartItem.length > 0 ? (
        cartItem.map((cart, index) => {
          return (
            <div
              key={index}
              className="flex bg-gray-50 p-4 mb-4 rounded-lg justify-between items-center"
            >
              <h3 className="font-bold text-md">{cart}</h3>
              <button
                className="bg-white px-4 py-1 rounded text-red-400 font-bold cursor-pointer"
                onClick={() => handleRemoveItem(cart)}
              >
                Remove
              </button>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col items-center gap-4 mt-40 dark:text-white">
          <FaRegSadCry size={50} />
          <h2 className="text-3xl font-bold">Your cart is empty</h2>
        </div>
      )}
      {cartItem.length > 0 && (
        <button
          className="bg-orange-400 w-full p-2 rounded-lg text-white font-bold cursor-pointer"
          onClick={() => dispatch(clearItem())}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default CartItems;
