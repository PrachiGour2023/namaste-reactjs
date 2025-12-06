import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFeaturedRestaurants,
  fetchRestaurantsList,
} from "./landingActions";

const landingSlice = createSlice({
  name: "landing",
  initialState: {
    featuredRestaurants: [],
    restaurantList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedRestaurants.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredRestaurants = action.payload;
        state.error = null;
      })
      .addCase(fetchFeaturedRestaurants.rejected, (state, action) => {
        (state.loading = false),
          (state.error = action.payload ?? "fetching data failed");
      });

    builder
      .addCase(fetchRestaurantsList.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurantsList.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurantList = action.payload;
        state.error = null;
      })
      .addCase(fetchRestaurantsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "fetching data failed";
      });
  },
});

export default landingSlice.reducer;
