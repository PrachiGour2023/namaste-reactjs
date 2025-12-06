import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../services/axios";
import { landing_page_api_url } from "../../../utils/constant";

export const fetchFeaturedRestaurants = createAsyncThunk(
  "landing/featuredRestaurants",
  async () => {
    try {
      const response = await axiosInstance.get(landing_page_api_url);
      return response?.data?.data;
    } catch (error) {
      return error || "unable to fetch the data";
    }
  }
);

export const fetchRestaurantsList = createAsyncThunk(
  "landing/restaurantList",
  async (collection_id) => {
    try {
      const response = await axiosInstance.get(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7527421&lng=75.88371599999999&collection=${collection_id}&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
      );
      return response?.data?.data;
    } catch (error) {
      return error || "unable to fetch restaurant list";
    }
  }
);
