export const image_cdn_url =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const landing_page_api_url =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7527421&lng=75.88371599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const foodAppData = {
  banner: [
    "http://tutofox.com/foodapp//banner/banner-1.jpg",
    "http://tutofox.com/foodapp//banner/banner-2.jpg",
    "http://tutofox.com/foodapp//banner/banner-3.png",
  ],
  categories: [
    {
      id: 1,
      name: "Cake",
      color: "#fbc831",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    },
    {
      id: 2,
      name: "Burger",
      color: "#9fd236",
      image:
        "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
    },
    {
      id: 3,
      name: "Pizza",
      color: "orange",
      image:
        "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
    },
    {
      id: 4,
      name: "Drink",
      color: "#f2f2f2",
      image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg",
    },
    {
      id: 5,
      name: "Idli",
      color: "#f2f2f2",
      image:
        "https://images.pexels.com/photos/10810653/pexels-photo-10810653.jpeg",
    },
    {
      id: 6,
      name: "Biryani",
      color: "#f2f2f2",
      image:
        "https://images.pexels.com/photos/17649369/pexels-photo-17649369.jpeg",
    },
    {
      id: 7,
      name: "Noodles",
      color: "#f2f2f2",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    },
    {
      id: 8,
      name: "Salad",
      color: "#f2f2f2",
      image: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg",
    },
  ],
};

export const foodData = [
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        collectionId: "80455",
        title: "Khichdi",
        description:
          "Comforting and filling, dive into the delicious flavour of Khichdi.",
        imageId:
          "COLLECTIONS/IMAGES/MERCH/2024/7/1/1b929125-327e-4e8d-93cc-1c8005a4b677_pic",
        aspectRatio: "3.44",
        cta: {
          link: "swiggy://collectionV2?collection_id=80455&tags=layout_BAU_Contextual,khichdi",
          type: "collectionv2",
        },
        type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        count: "242 restaurants",
        navBarConfig: {},
      },
    },
  },
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.FilterSortWidget",
        sortConfigs: [
          {
            key: "relevance",
            title: "Relevance (Default)",
            selected: true,
            defaultSelection: true,
          },
          {
            key: "deliveryTimeAsc",
            title: "Delivery Time",
          },
          {
            key: "modelBasedRatingDesc",
            title: "Rating",
          },
          {
            key: "costForTwoAsc",
            title: "Cost: Low to High",
          },
          {
            key: "costForTwoDesc",
            title: "Cost: High to Low",
          },
        ],
        restaurantCount: 242,
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "881204",
          name: "Big Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_881204.JPG",
          locality: "Tukoganj Main road",
          areaName: "Treasure Island Indore",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Tibetan", "Desserts"],
          avgRating: 4.4,
          parentId: "434792",
          avgRatingString: "4.4",
          totalRatingsString: "776",
          promoted: true,
          adTrackingId:
            "cid=06ba3030-4fc6-48dc-b509-0ce812ddf7cd~p=0~adgrpid=06ba3030-4fc6-48dc-b509-0ce812ddf7cd#ag21~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=881204~plpr=COLLECTION~eid=21a78c8d-f105-4e8b-b503-6f22072b2dfe~srvts=1763550984023~collid=80455",
          sla: {
            deliveryTime: 49,
            lastMileTravel: 5.5,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "5.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹129",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "06ba3030-4fc6-48dc-b509-0ce812ddf7cd",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=881204&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "148404",
          name: "Om Namkeen",
          cloudinaryImageId: "okkh43ib3xm733hebgus",
          locality: "Jawahar Marg",
          areaName: "Lodhipura",
          costForTwo: "₹200 for two",
          cuisines: ["Snacks"],
          avgRating: 4.8,
          veg: true,
          parentId: "7861",
          avgRatingString: "4.8",
          totalRatingsString: "26K+",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 21:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=148404&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "86044",
          name: "LunchBox - Meals and Thalis",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/57d1dfaa-46c7-42d0-9890-0bc0725392fb_86044.jpg",
          locality: "Raghav Regency",
          areaName: "Sudama Nagar",
          costForTwo: "₹200 for two",
          cuisines: ["Thalis", "North Indian", "Biryani"],
          avgRating: 4.4,
          parentId: "4925",
          avgRatingString: "4.4",
          totalRatingsString: "4.3K+",
          promoted: true,
          adTrackingId:
            "cid=97296434-21de-48cc-8187-22759d342e8e~p=1~adgrpid=97296434-21de-48cc-8187-22759d342e8e#ag17~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=86044~plpr=COLLECTION~eid=dd0d7c61-20b6-4b89-b55c-79165988b2f1~srvts=1763550984023~collid=80455",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "High%20Protein/rx%20tag%205.png",
                description: "High Protein",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "High%20Protein/rx%20tag%205.png",
                      description: "High Protein",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "97296434-21de-48cc-8187-22759d342e8e",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=86044&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "69420",
          name: "Vijay Chaat House",
          cloudinaryImageId: "mstgatb2vu8v48kcua81",
          locality: "Nihalpura",
          areaName: "Rajwada",
          costForTwo: "₹150 for two",
          cuisines: ["Snacks", "Sweets", "Chaat", "Street Food"],
          avgRating: 4.6,
          veg: true,
          parentId: "223165",
          avgRatingString: "4.6",
          totalRatingsString: "5.4K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 21:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹50 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=69420&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "263735",
          name: "Veg Meals By LunchBox",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/510f08c2-1ff1-40f2-847a-88e3f15ac046_263735.JPG",
          locality: "Raghav Regency",
          areaName: "Sudama Nagar",
          costForTwo: "₹200 for two",
          cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
          avgRating: 4.4,
          veg: true,
          parentId: "21938",
          avgRatingString: "4.4",
          totalRatingsString: "187",
          promoted: true,
          adTrackingId:
            "cid=6c4123e3-1c1a-423d-8404-20d3a9a8d233~p=2~adgrpid=6c4123e3-1c1a-423d-8404-20d3a9a8d233#ag17~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=263735~plpr=COLLECTION~eid=fd88bbc0-9882-479e-9214-cae0be879b9d~srvts=1763550984023~collid=80455",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "6c4123e3-1c1a-423d-8404-20d3a9a8d233",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=263735&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "78029",
          name: "Desi Tadka",
          cloudinaryImageId: "r7bvw2gqk2vpb0jvfika",
          locality: "Kalani Nagar",
          areaName: "Kanyakubj Nagar",
          costForTwo: "₹198 for two",
          cuisines: ["Combos", "North Indian", "Biryani", "Chinese"],
          avgRating: 4.1,
          veg: true,
          parentId: "393990",
          avgRatingString: "4.1",
          totalRatingsString: "2.3K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=78029&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "493646",
          name: "Shri Mahalaxmi Fariyali Center",
          cloudinaryImageId: "v36jsczlzku2nvlkkwd6",
          locality: "Sarafa",
          areaName: "Kothari Market",
          costForTwo: "₹150 for two",
          cuisines: ["Indian"],
          avgRating: 4.5,
          veg: true,
          parentId: "296037",
          avgRatingString: "4.5",
          totalRatingsString: "149",
          promoted: true,
          adTrackingId:
            "cid=31820615~p=3~adgrpid=31820615#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=493646~plpr=COLLECTION~eid=db268acf-f455-44e1-a9ff-c950bf58b10f~srvts=1763550984023~collid=80455",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 3.8,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "3.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 22:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31820615",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=493646&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "211949",
          name: "The Indories Village",
          cloudinaryImageId: "bnun2vd1rfrufttcieqf",
          locality: "Sarafa",
          areaName: "Malharganj",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Indian"],
          avgRating: 3.7,
          veg: true,
          parentId: "210098",
          avgRatingString: "3.7",
          totalRatingsString: "100",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=211949&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "767109",
          name: "New Pushpak Restaurant",
          cloudinaryImageId: "ced97cdeeec18cfed238710200684cc3",
          locality: "Ashram Complex",
          areaName: "NewPalasia",
          costForTwo: "₹300 for two",
          cuisines: ["Beverages", "Chinese", "Pastas"],
          avgRating: 3.6,
          veg: true,
          parentId: "458070",
          avgRatingString: "3.6",
          totalRatingsString: "13",
          promoted: true,
          adTrackingId:
            "cid=32693129~p=4~adgrpid=32693129#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=767109~plpr=COLLECTION~eid=e4c835d3-e9c3-41b1-b28f-c3b5fb40e09e~srvts=1763550984023~collid=80455",
          sla: {
            deliveryTime: 48,
            lastMileTravel: 6,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 22:55:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹19",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "32693129",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=767109&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "388119",
          name: "ANNAPURNA BHOJNALAYA",
          cloudinaryImageId: "pmfmk805oeuf4fbw6xxz",
          locality: "Gangwal",
          areaName: "Sarafa",
          costForTwo: "₹200 for two",
          cuisines: ["Indian", "Thalis"],
          avgRating: 3.8,
          veg: true,
          parentId: "34014",
          avgRatingString: "3.8",
          totalRatingsString: "250",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 22:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=388119&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "965216",
          name: "Stay Hungry Restro And Cafe",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/28/d69db00c-2e2e-433f-a3df-cde524c47116_965216.JPG",
          locality: "Airport Road",
          areaName: "Shri Krishna Colony ",
          costForTwo: "₹200 for two",
          cuisines: [
            "Beverages",
            "Pastas",
            "Ice Cream Cakes",
            "Fast Food",
            "Burgers",
            "Cafe",
          ],
          avgRating: 3.9,
          veg: true,
          parentId: "565702",
          avgRatingString: "3.9",
          totalRatingsString: "3",
          promoted: true,
          adTrackingId:
            "cid=a3162864-9f8a-4a96-b8dc-2471a3cd2171~p=5~adgrpid=a3162864-9f8a-4a96-b8dc-2471a3cd2171#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=965216~plpr=COLLECTION~eid=44b7667d-a68f-4279-a0ce-5b3b7c15c58d~srvts=1763550984023~collid=80455",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "a3162864-9f8a-4a96-b8dc-2471a3cd2171",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=965216&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "942217",
          name: "Agarwal Khichadi Malharganj",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/15/bb7d3bed-4da5-47b0-ab98-bed136716029_942217.JPG",
          locality: "Sarafa",
          areaName: "Sarafa",
          costForTwo: "₹200 for two",
          cuisines: ["Indian"],
          avgRating: 4.3,
          veg: true,
          parentId: "555626",
          avgRatingString: "4.3",
          totalRatingsString: "83",
          sla: {
            deliveryTime: 15,
            lastMileTravel: 1.5,
            serviceability: "SERVICEABLE",
            slaString: "10-15 mins",
            lastMileTravelString: "1.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=942217&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "995812",
          name: "Rambabu Ke Parathe",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/154275c3-f7e9-4bcf-a9b3-9b4669f2f7e2_995812.jpg",
          locality: "New Palasia",
          areaName: "New Palasia",
          costForTwo: "₹200 for two",
          cuisines: ["Home Food"],
          avgRating: 3.6,
          veg: true,
          parentId: "511027",
          avgRatingString: "3.6",
          totalRatingsString: "19",
          promoted: true,
          adTrackingId:
            "cid=32859749~p=6~adgrpid=32859749#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=995812~plpr=COLLECTION~eid=8e19a7f3-2528-45fc-8f36-e774aff15777~srvts=1763550984023~collid=80455",
          sla: {
            deliveryTime: 50,
            lastMileTravel: 6.5,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "6.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-19 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "32859749",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=995812&source=collection&query=Khichdi",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
];

export const MenuData = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "937167",
          name: "Haldiram's Restaurant",
          city: "Indore",
          slugs: {
            restaurant: "haldiram's-restaurant-new-palasia-new-palasia",
            city: "indore",
          },
          uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/27/c45e7166-7228-4540-9e15-3c3773a90db3_937167.JPG",
          locality: "HIGH STREET",
          areaName: "Bypass South",
          costForTwo: "40000",
          costForTwoMessage: "₹400 for two",
          cuisines: ["North Indian", "Chaat"],
          avgRating: 4.3,
          veg: true,
          feeDetails: {
            restaurantId: "937167",
            fees: [{}],
          },
          parentId: "351771",
          avgRatingString: "4.3",
          totalRatingsString: "2.1K+ ratings",
          sla: {
            restaurantId: "937167",
            slaString: "30-35 MINS",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
        },
        analytics: {},
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        id: "offerCollectionWidget_UX4",
        gridElements: {
          infoWithStyle: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
            offers: [
              {
                info: {
                  header: "ITEMS AT ₹99",
                  offerTag: "DEAL OF DAY",
                  offerTagColor: "#E46D47",
                  offerIds: ["13b2dfb7-7613-4a69-b355-c23f4611d5b6"],
                  expiryTime: "1970-01-01T00:00:00Z",
                  description: "ON SELECT ITEMS |",
                  offerType: "offers",
                  restId: "937167",
                  offerLogo: "offers/deal-of-day",
                  descriptionTextColor: "#7302060C",
                },
                cta: {
                  type: "OFFER_HALF_CARD",
                },
              },
              {
                info: {
                  header: "FLAT ₹125 OFF",
                  offerTag: "FLAT DEAL",
                  offerTagColor: "#E46D47",
                  offerIds: ["ad90cc20-906e-4e4b-a914-03cc1d3d8279"],
                  expiryTime: "1970-01-01T00:00:00Z",
                  couponCode: "USE FLAVORFUL",
                  description: "ABOVE ₹249",
                  offerType: "offers",
                  restId: "937167",
                  offerLogo: "offers/generic",
                  descriptionTextColor: "#7302060C",
                  primaryDescription: "USE FLAVORFUL",
                },
                cta: {
                  type: "OFFER_HALF_CARD",
                },
              },
              {
                info: {
                  header: "FLAT ₹150 OFF",
                  offerTag: "DEFAULT",
                  offerTagColor: "#E46D47",
                  offerIds: ["38af5986-b090-4ac4-bc5b-d564b0b19e0a"],
                  expiryTime: "1970-01-01T00:00:00Z",
                  couponCode: "USE MEALDEAL",
                  description: "ABOVE ₹299",
                  offerType: "offers",
                  restId: "937167",
                  offerLogo: "offers/generic",
                  descriptionTextColor: "#7302060C",
                  primaryDescription: "USE MEALDEAL",
                },
                cta: {
                  type: "OFFER_HALF_CARD",
                },
              },
              {
                info: {
                  header: "FLAT ₹150 OFF",
                  offerTag: "FLAT DEAL",
                  offerTagColor: "#E46D47",
                  offerIds: ["23a0e276-19f3-444e-b6f7-c03e21ff228c"],
                  expiryTime: "1970-01-01T00:00:00Z",
                  couponCode: "USE FLAT150",
                  description: "ABOVE ₹399",
                  offerType: "offers",
                  restId: "937167",
                  offerLogo: "offers/generic",
                  descriptionTextColor: "#7302060C",
                  primaryDescription: "USE FLAT150",
                },
                cta: {
                  type: "OFFER_HALF_CARD",
                },
              },
              {
                info: {
                  header: "FLAT ₹550 OFF",
                  offerTag: "DEFAULT",
                  offerTagColor: "#E46D47",
                  offerIds: ["cd971694-3492-4c9b-80d0-f8c3bd13a756"],
                  expiryTime: "1970-01-01T00:00:00Z",
                  couponCode: "USE FLAT550",
                  description: "ABOVE ₹2999",
                  offerType: "offers",
                  restId: "937167",
                  offerLogo: "offers/generic",
                  descriptionTextColor: "#7302060C",
                  primaryDescription: "USE FLAT550",
                },
                cta: {
                  type: "OFFER_HALF_CARD",
                },
              },
            ],
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        title: "Recommended",
        itemCards: [
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "167687640",
                name: "Butter Chicken Bowl",
                category: "High-Protein Bowls",
                description:
                  "Creamy butter chicken with rich tomato gravy and rice. (442kCal, Protein - 21g, Carbs - 23g, Fat -28g)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/11/26/54515226-a46e-4a87-b188-3bd11a452b29_ef476db7-41c3-41e0-8d1d-37007eddbbf6.jpeg",
                inStock: 1,
                price: 22900,
                finalPrice: 11500,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478794",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478795",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478797",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 22900,
                ribbon: {},
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "4.1",
                    ratingCount: "4 ratings",
                    ratingCountV2: "4",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["353e9c87-3a0a-410c-a851-fe56a3c7eb0a"],
                parentId: "101194438",
                offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166314608",
                name: "Hyderabadi Egg Biryani Bowl (Protein - 21g)",
                category: "High-Protein Bowls",
                description:
                  "659kCal, Protein - 21, Carbs - 40, Fat- 44\nHard-boiled eggs tossed in bold Hyderabadi masala, layered with flavorful biryani for a rich, satisfying meal. (Energy: 652KCal, Carbohydrates: 39gm, Proteins: 21gm, Fats: 44gm, Sodium: 1665mg)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/94d4115f-b2da-4ae1-ac8c-c0988181ba6b_3f932cd1-788e-4356-90a2-23bbf376c314.jpeg",
                inStock: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "229461469",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "229461473",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "228308071",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                ribbon: {},
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "4.3",
                    ratingCount: "3 ratings",
                    ratingCountV2: "3",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "100005193",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "177795541",
                name: "High-Protein Butter Chicken Rice Bowl with Seekh Kebab",
                category: "High-Protein Bowls",
                description:
                  "A high protein feast that delivers on taste. Creamy butter chicken paired with rice and succulent chicken seekh kebab for a power packed, satisfying meal.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/11/11/fda8445f-afbc-49da-882d-446d89aaebb6_8782af5f-0278-44c0-a883-780117d5f1c1.jpeg",
                inStock: 1,
                price: 32900,
                finalPrice: 24900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478785",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 32900,
                ribbon: {},
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "5.0",
                    ratingCount: "3 ratings",
                    ratingCountV2: "3",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["99cc8428-0008-4940-a8e4-b1a7ba690500"],
                parentId: "107564799",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "177795534",
                name: "Paneer Lababdar Rice Bowl with Dahi Kebab",
                category: "High-Protein Bowls",
                description:
                  "High on protein, high on flavour. Creamy paneer with rice, paired with soft, protein-rich dahi kebabs- pure lababdari in every bite.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/10/23/aab7da95-68ba-45dc-aec0-a3d5ca1cb2d7_74f0dfd1-d432-4126-9cda-5d1cf4e5deed.png",
                inStock: 1,
                isVeg: 1,
                price: 29900,
                finalPrice: 19900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478783",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                defaultPrice: 29900,
                ribbon: {},
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "5.0",
                    ratingCount: "2 ratings",
                    ratingCountV2: "2",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["f10181d2-4ea0-41d7-a6c2-cf87682c3ec7"],
                parentId: "107564803",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166314658",
                name: "Mughlai Chicken Curry Bowl (Protein - 26g)",
                category: "High-Protein Bowls",
                description:
                  '"543kCal, Protein - 26g, Carbs - 39g, Fat -28g \nRich and buttery Mughlai chicken curry with rice."',
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/d5133834-7add-4e65-ab66-1c7b52fe3cff_4e0630cb-1542-4174-a5a5-9e95dab0e5bd.jpeg",
                inStock: 1,
                price: 27900,
                finalPrice: 14000,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478819",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478821",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478822",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 27900,
                ribbon: {},
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "5.0",
                    ratingCount: "2 ratings",
                    ratingCountV2: "2",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["518a3cd4-6e73-4a57-a5f0-7cc184660871"],
                parentId: "101194459",
                offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "177795538",
                name: "Chicken Tikka Masala Bowl with Seekh Kebab",
                category: "High-Protein Bowls",
                description:
                  "Juicy tandoori chicken cooked in rich masala gravy, served with rice and protein-packed chicken seekh kebab smoky, satisfying, and full of flavour.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/10/23/d6c40ce1-2d49-4c6e-ab51-d7494b2a34a7_df02a022-92aa-4c19-82e6-846659fab696.png",
                inStock: 1,
                price: 32900,
                finalPrice: 24900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478788",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 32900,
                ribbon: {},
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                offerIds: ["99cc8428-0008-4940-a8e4-b1a7ba690500"],
                parentId: "107564801",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "167720408",
                name: "Lucknowi Chicken Biryani Bowl (Protein - 23g)",
                category: "High-Protein Bowls",
                description:
                  "837kCal, Protein - 28g, Carbs - 99g, Fat -35g\nTender chicken infused with royal Awadhi spices, slow-cooked in a rich and aromatic biryani. (Energy: 559KCal, Carbohydrates: 44gm, Proteins: 23gm, Fats: 31gm, Sodium: 706mg)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/2875df7a-1a18-4d34-bfb4-cff3bd67e44e_0f07b466-4323-4766-b759-929ce6e015fb.jpeg",
                inStock: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "229462380",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "229462384",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "228308275",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                ribbon: {},
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "4.3",
                    ratingCount: "4 ratings",
                    ratingCountV2: "4",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "101194455",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "177795530",
                name: "Paneer Tikka Masala Rice bowl with Dahi Kebab",
                category: "High-Protein Bowls",
                description:
                  "Smoky, spiced paneer tikka cooked in a rich, creamy masala gravy paired with crisp, melt-in-mouth dahi kebabs for the ultimate comfort indulgence. A hearty North Indian classic made to satisfy every craving.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/10/23/56a9a048-e8a8-4e7d-beca-712058d09aa0_1a6d4b10-4dae-44b3-ac5a-edaa7aaa6714.png",
                inStock: 1,
                isVeg: 1,
                price: 29900,
                finalPrice: 19900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478777",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                defaultPrice: 29900,
                ribbon: {},
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "4.0",
                    ratingCount: "2 ratings",
                    ratingCountV2: "2",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["f10181d2-4ea0-41d7-a6c2-cf87682c3ec7"],
                parentId: "107564804",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "185266560",
                name: "Chicken Tikka Masala Bowl",
                category: "High-Protein Bowls",
                description:
                  "Spiced chicken tikka in a rich gravy, served with rice. (462kCal, Protein - 26g, Carbs - 33g, Fat -23g)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/d3f70dfe-9f4b-43d5-990b-febaa91c8ae3_58bbf88b-bd0d-4483-a43e-25da2b9f3467.jpeg",
                inStock: 1,
                price: 29900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478801",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478802",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478803",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 29900,
                ribbon: {},
                showImage: true,
                itemBadge: {},
                badgesV2: {},
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                parentId: "112555703",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166314638",
                name: "Lucknowi Egg Biryani Bowl (Protein - 21g)",
                category: "High-Protein Bowls",
                description:
                  "881kCal, Protein - 26g, Carbs - 92g, Fat -44g\nA Nawabi delight featuring spiced boiled eggs in a fragrant, slow-cooked Lucknowi biryani. (Energy: 602KCal, Carbohydrates: 37gm, Proteins: 21gm, Fats: 40gm, Sodium: 940mg)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/55055796-b9a2-46d2-bee1-44b92eec9073_bc272f77-6c0a-48d7-9505-be46a866fc52.jpeg",
                inStock: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "229462443",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "229462449",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "228308572",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                ribbon: {},
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "101194456",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "185266559",
                name: "Dal Makhani Rice Bowl with Dahi Kebab",
                category: "High-Protein Bowls",
                description:
                  "Power packed indulgence in a bowl. Protein rich creamy dal makhani paired with rice and soft high protein dahi kebabs for a wholesome and satisfying meal.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/10/23/255a632f-d3b9-49ba-864c-de91e63ff5d0_a670f53f-941f-48e7-a5d8-1cdabc6e3588.png",
                inStock: 1,
                isVeg: 1,
                price: 29900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478792",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                defaultPrice: 29900,
                ribbon: {},
                showImage: true,
                itemBadge: {},
                badgesV2: {},
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                parentId: "112555705",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "185266561",
                name: "Chicken Tikki & Egg Bowl",
                category: "High-Protein Bowls",
                description:
                  "Protein-packed chicken tikki and egg with rice. (576kCal, Protein - 23g, Carbs - 33g, Fat -38g)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/9de7a7b9-d06e-40e6-b381-568dd6257163_169a86e3-9bbf-42db-9888-6a412e2cbb2e.jpeg",
                inStock: 1,
                price: 27900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478805",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478806",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478808",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 27900,
                ribbon: {},
                showImage: true,
                itemBadge: {},
                badgesV2: {},
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                parentId: "112555704",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "177795544",
                name: "Chicken Lababdar Rice Bowl with Seekh Kebab",
                category: "High-Protein Bowls",
                description:
                  "A protein-packed bowl of boneless chicken in creamy tomato gravy, served with rice and juicy chicken seekh kebab - one bite wont be enough.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/10/23/b9b20ba3-3a42-4b12-86a6-a8a110ff2fff_bbd4e3a5-bef9-428b-85f6-e5dabb001abc.png",
                inStock: 1,
                price: 32900,
                finalPrice: 24900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478790",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 32900,
                ribbon: {},
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                offerIds: ["99cc8428-0008-4940-a8e4-b1a7ba690500"],
                parentId: "107564800",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166314746",
                name: "Grilled Mughlai Chicken Bowl",
                category: "High-Protein Bowls",
                description:
                  "A wholesome mix of grilled chicken and rice. (628kCal, Protein - 21g, Carbs - 33g, Fat -44g)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/7e9ca9d0-27ba-42e0-b194-c6d938e6d14b_e28bd3fa-fcc3-4e5f-a266-8fdc4b0c3d66.jpeg",
                inStock: 1,
                price: 27900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478811",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478812",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478813",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 27900,
                ribbon: {},
                showImage: true,
                itemBadge: {},
                badgesV2: {},
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                parentId: "100064522",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166314989",
                name: "Dal Makhani Bowl (378 Kcal)",
                category: "Under 400 Calories Bowl",
                description:
                  "Slow-cooked rich dal makhani with soft rice. (378kCal, Protein - 9g, Carbs - 37g, Fat -20g)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/10/24/5c50e6ea-306f-43a3-b93b-d9730b7540fc_45f3d9e1-c025-4f47-bad4-bd48f7481fcf.jpeg",
                inStock: 1,
                isVeg: 1,
                price: 14900,
                finalPrice: 9900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250609605",
                    groupName: "Top It Up With Protein",
                    choices: [
                      {
                        id: "138007995",
                        name: "Falafel Shots",
                        price: 4000,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250609613",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                defaultPrice: 14900,
                ribbon: {
                  text: "Bestseller",
                  textColor: "#ffffff",
                  topBackgroundColor: "#d53d4c",
                  bottomBackgroundColor: "#b02331",
                },
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                isBestseller: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.8",
                    ratingCount: "16 ratings",
                    ratingCountV2: "16",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                cartContext: "quick_prep",
                offerIds: ["5455ff57-5f0f-473c-8c46-2de6d1e1d36e"],
                isNinetyninestoreItem: true,
                parentId: "101194446",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166315070",
                name: "Rajma Chawal Bowl (374 Kcal)",
                category: "Under 400 Calories Bowl",
                description:
                  '"374kCal, Protein - 7g, Carbs - 40g, Fat -19g \nSlow-cooked rajma in a mildly spiced homestyle masala, served with fragrant basmati rice for a comforting, wholesome meal."',
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/8c93325a-4254-41bc-adf3-6591d893463b_7f54f446-ee61-4985-9e75-28ea14220164.jpeg",
                inStock: 1,
                isVeg: 1,
                price: 14900,
                finalPrice: 9900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "251844009",
                    groupName: "Top It Up With Protein",
                    choices: [
                      {
                        id: "138007995",
                        name: "Falafel Shots",
                        price: 4000,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "251844010",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                defaultPrice: 14900,
                ribbon: {
                  text: "Bestseller",
                  textColor: "#ffffff",
                  topBackgroundColor: "#d53d4c",
                  bottomBackgroundColor: "#b02331",
                },
                showImage: true,
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                isBestseller: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.0",
                    ratingCount: "8 ratings",
                    ratingCountV2: "8",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                cartContext: "quick_prep",
                offerIds: ["5455ff57-5f0f-473c-8c46-2de6d1e1d36e"],
                isNinetyninestoreItem: true,
                parentId: "101194468",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
        ],
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        title: "High-Protein Bowls",
        itemCards: [
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "167687640",
                name: "Butter Chicken Bowl",
                category: "High-Protein Bowls",
                description:
                  "Creamy butter chicken with rich tomato gravy and rice. (442kCal, Protein - 21g, Carbs - 23g, Fat -28g)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/11/26/54515226-a46e-4a87-b188-3bd11a452b29_ef476db7-41c3-41e0-8d1d-37007eddbbf6.jpeg",
                inStock: 1,
                price: 22900,
                finalPrice: 11500,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478794",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478795",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478797",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 22900,
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "4.1",
                    ratingCount: "4 ratings",
                    ratingCountV2: "4",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["353e9c87-3a0a-410c-a851-fe56a3c7eb0a"],
                parentId: "101194438",
                offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166314608",
                name: "Hyderabadi Egg Biryani Bowl (Protein - 21g)",
                category: "High-Protein Bowls",
                description:
                  "659kCal, Protein - 21, Carbs - 40, Fat- 44\nHard-boiled eggs tossed in bold Hyderabadi masala, layered with flavorful biryani for a rich, satisfying meal. (Energy: 652KCal, Carbohydrates: 39gm, Proteins: 21gm, Fats: 44gm, Sodium: 1665mg)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/94d4115f-b2da-4ae1-ac8c-c0988181ba6b_3f932cd1-788e-4356-90a2-23bbf376c314.jpeg",
                inStock: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "229461469",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "229461473",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "228308071",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "4.3",
                    ratingCount: "3 ratings",
                    ratingCountV2: "3",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "100005193",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "177795541",
                name: "High-Protein Butter Chicken Rice Bowl with Seekh Kebab",
                category: "High-Protein Bowls",
                description:
                  "A high protein feast that delivers on taste. Creamy butter chicken paired with rice and succulent chicken seekh kebab for a power packed, satisfying meal.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/11/11/fda8445f-afbc-49da-882d-446d89aaebb6_8782af5f-0278-44c0-a883-780117d5f1c1.jpeg",
                inStock: 1,
                price: 32900,
                finalPrice: 24900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478785",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 32900,
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "5.0",
                    ratingCount: "3 ratings",
                    ratingCountV2: "3",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["99cc8428-0008-4940-a8e4-b1a7ba690500"],
                parentId: "107564799",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "177795534",
                name: "Paneer Lababdar Rice Bowl with Dahi Kebab",
                category: "High-Protein Bowls",
                description:
                  "High on protein, high on flavour. Creamy paneer with rice, paired with soft, protein-rich dahi kebabs- pure lababdari in every bite.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/10/23/aab7da95-68ba-45dc-aec0-a3d5ca1cb2d7_74f0dfd1-d432-4126-9cda-5d1cf4e5deed.png",
                inStock: 1,
                isVeg: 1,
                price: 29900,
                finalPrice: 19900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478783",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                defaultPrice: 29900,
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "5.0",
                    ratingCount: "2 ratings",
                    ratingCountV2: "2",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["f10181d2-4ea0-41d7-a6c2-cf87682c3ec7"],
                parentId: "107564803",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166314658",
                name: "Mughlai Chicken Curry Bowl (Protein - 26g)",
                category: "High-Protein Bowls",
                description:
                  '"543kCal, Protein - 26g, Carbs - 39g, Fat -28g \nRich and buttery Mughlai chicken curry with rice."',
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/d5133834-7add-4e65-ab66-1c7b52fe3cff_4e0630cb-1542-4174-a5a5-9e95dab0e5bd.jpeg",
                inStock: 1,
                price: 27900,
                finalPrice: 14000,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478819",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478821",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478822",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 27900,
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "5.0",
                    ratingCount: "2 ratings",
                    ratingCountV2: "2",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["518a3cd4-6e73-4a57-a5f0-7cc184660871"],
                parentId: "101194459",
                offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "177795538",
                name: "Chicken Tikka Masala Bowl with Seekh Kebab",
                category: "High-Protein Bowls",
                description:
                  "Juicy tandoori chicken cooked in rich masala gravy, served with rice and protein-packed chicken seekh kebab smoky, satisfying, and full of flavour.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/10/23/d6c40ce1-2d49-4c6e-ab51-d7494b2a34a7_df02a022-92aa-4c19-82e6-846659fab696.png",
                inStock: 1,
                price: 32900,
                finalPrice: 24900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478788",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 32900,
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                offerIds: ["99cc8428-0008-4940-a8e4-b1a7ba690500"],
                parentId: "107564801",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "167720408",
                name: "Lucknowi Chicken Biryani Bowl (Protein - 23g)",
                category: "High-Protein Bowls",
                description:
                  "837kCal, Protein - 28g, Carbs - 99g, Fat -35g\nTender chicken infused with royal Awadhi spices, slow-cooked in a rich and aromatic biryani. (Energy: 559KCal, Carbohydrates: 44gm, Proteins: 23gm, Fats: 31gm, Sodium: 706mg)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/2875df7a-1a18-4d34-bfb4-cff3bd67e44e_0f07b466-4323-4766-b759-929ce6e015fb.jpeg",
                inStock: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "229462380",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "229462384",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "228308275",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "4.3",
                    ratingCount: "4 ratings",
                    ratingCountV2: "4",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "101194455",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "177795530",
                name: "Paneer Tikka Masala Rice bowl with Dahi Kebab",
                category: "High-Protein Bowls",
                description:
                  "Smoky, spiced paneer tikka cooked in a rich, creamy masala gravy paired with crisp, melt-in-mouth dahi kebabs for the ultimate comfort indulgence. A hearty North Indian classic made to satisfy every craving.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/10/23/56a9a048-e8a8-4e7d-beca-712058d09aa0_1a6d4b10-4dae-44b3-ac5a-edaa7aaa6714.png",
                inStock: 1,
                isVeg: 1,
                price: 29900,
                finalPrice: 19900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478777",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                defaultPrice: 29900,
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "4.0",
                    ratingCount: "2 ratings",
                    ratingCountV2: "2",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["f10181d2-4ea0-41d7-a6c2-cf87682c3ec7"],
                parentId: "107564804",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "185266560",
                name: "Chicken Tikka Masala Bowl",
                category: "High-Protein Bowls",
                description:
                  "Spiced chicken tikka in a rich gravy, served with rice. (462kCal, Protein - 26g, Carbs - 33g, Fat -23g)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/d3f70dfe-9f4b-43d5-990b-febaa91c8ae3_58bbf88b-bd0d-4483-a43e-25da2b9f3467.jpeg",
                inStock: 1,
                price: 29900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478801",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478802",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478803",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 29900,
                ribbon: {},
                type: "ITEM",
                itemBadge: {},
                badgesV2: {},
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                parentId: "112555703",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166314638",
                name: "Lucknowi Egg Biryani Bowl (Protein - 21g)",
                category: "High-Protein Bowls",
                description:
                  "881kCal, Protein - 26g, Carbs - 92g, Fat -44g\nA Nawabi delight featuring spiced boiled eggs in a fragrant, slow-cooked Lucknowi biryani. (Energy: 602KCal, Carbohydrates: 37gm, Proteins: 21gm, Fats: 40gm, Sodium: 940mg)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/55055796-b9a2-46d2-bee1-44b92eec9073_bc272f77-6c0a-48d7-9505-be46a866fc52.jpeg",
                inStock: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "229462443",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "229462449",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "228308572",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "101194456",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "185266559",
                name: "Dal Makhani Rice Bowl with Dahi Kebab",
                category: "High-Protein Bowls",
                description:
                  "Power packed indulgence in a bowl. Protein rich creamy dal makhani paired with rice and soft high protein dahi kebabs for a wholesome and satisfying meal.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/10/23/255a632f-d3b9-49ba-864c-de91e63ff5d0_a670f53f-941f-48e7-a5d8-1cdabc6e3588.png",
                inStock: 1,
                isVeg: 1,
                price: 29900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478792",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                defaultPrice: 29900,
                ribbon: {},
                type: "ITEM",
                itemBadge: {},
                badgesV2: {},
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                parentId: "112555705",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "185266561",
                name: "Chicken Tikki & Egg Bowl",
                category: "High-Protein Bowls",
                description:
                  "Protein-packed chicken tikki and egg with rice. (576kCal, Protein - 23g, Carbs - 33g, Fat -38g)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/9de7a7b9-d06e-40e6-b381-568dd6257163_169a86e3-9bbf-42db-9888-6a412e2cbb2e.jpeg",
                inStock: 1,
                price: 27900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478805",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478806",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478808",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 27900,
                ribbon: {},
                type: "ITEM",
                itemBadge: {},
                badgesV2: {},
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                parentId: "112555704",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "177795544",
                name: "Chicken Lababdar Rice Bowl with Seekh Kebab",
                category: "High-Protein Bowls",
                description:
                  "A protein-packed bowl of boneless chicken in creamy tomato gravy, served with rice and juicy chicken seekh kebab - one bite wont be enough.",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/10/23/b9b20ba3-3a42-4b12-86a6-a8a110ff2fff_bbd4e3a5-bef9-428b-85f6-e5dabb001abc.png",
                inStock: 1,
                price: 32900,
                finalPrice: 24900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478790",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 32900,
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                offerIds: ["99cc8428-0008-4940-a8e4-b1a7ba690500"],
                parentId: "107564800",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166314746",
                name: "Grilled Mughlai Chicken Bowl",
                category: "High-Protein Bowls",
                description:
                  "A wholesome mix of grilled chicken and rice. (628kCal, Protein - 21g, Carbs - 33g, Fat -44g)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/7e9ca9d0-27ba-42e0-b194-c6d938e6d14b_e28bd3fa-fcc3-4e5f-a266-8fdc4b0c3d66.jpeg",
                inStock: 1,
                price: 27900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250478811",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478812",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250478813",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                defaultPrice: 27900,
                ribbon: {},
                type: "ITEM",
                itemBadge: {},
                badgesV2: {},
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                parentId: "100064522",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
        ],
        subtitleSuffix: {},
        image:
          "FOOD_CATALOG/IMAGES/CMS/2025/11/26/54515226-a46e-4a87-b188-3bd11a452b29_ef476db7-41c3-41e0-8d1d-37007eddbbf6.jpeg",
        categoryId: "59671269",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        title: "High-Energy Endurance Bowls",
        itemCards: [
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "167687620",
                name: "Hyderabadi Chicken Biryani Bowl (Carbs - 47g)",
                category: "High-Energy Endurance Bowls",
                description:
                  "616kCal, Protein - 24g, Carbs - 47g, Fat -35g\nJuicy, spice-marinated chicken cooked to perfection in a traditional Hyderabadi dum biryani. (Energy: 609KCal, Carbohydrates: 46gm, Proteins: 23gm, Fats: 35gm, Sodium: 1431mg)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/5a26aa89-ea7c-4be3-9caf-cf9c45108c82_0d225cf3-794d-418e-858c-d15a7aadd1f1.jpeg",
                inStock: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "229461597",
                    groupName: "Fuel Up Your Protein",
                    choices: [
                      {
                        id: "138007997",
                        name: "Chicken Meatball (3pcs)",
                        price: 4000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "229461601",
                    groupName: "Protein Boost: Eggs Inside",
                    choices: [
                      {
                        id: "138007994",
                        name: "Omellette",
                        price: 3000,
                        inStock: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "228308820",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "NONVEG",
                },
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "3.9",
                    ratingCount: "3 ratings",
                    ratingCountV2: "3",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#D9EFEC", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_medium",
                    ratingTextColor: "rating_medium",
                    ratingCountTextColor: "rating_medium",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "101194450",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "167720414",
                name: "Lucknowi Paneer Biryani Bowl (Carbs - 43g)",
                category: "High-Energy Endurance Bowls",
                description:
                  "860kCal, Protein - 23g, Carbs - 97g, Fat -41g\nSoft, marinated paneer infused with rich Lucknowi spices, layered with aromatic biryani. (Energy: 606KCal, Carbohydrates: 42gm, Proteins: 15gm, Fats: 40gm, Sodium: 836mg)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/d518ac23-b460-4773-b3f3-aca29808122b_a2d49506-5299-47c8-9859-c3fbfdea3ae9.jpeg",
                inStock: 1,
                isVeg: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "229461946",
                    groupName: "Top It Up With Protein",
                    choices: [
                      {
                        id: "138007995",
                        name: "Falafel Shots",
                        price: 4000,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "228308324",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "4.4",
                    ratingCount: "7 ratings",
                    ratingCountV2: "7",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "101194457",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166314483",
                name: "Hyderabadi Paneer Biryani Bowl (Carbs - 45g)",
                category: "High-Energy Endurance Bowls",
                description:
                  "638kCal, Protein - 18g, Carbs - 45g, Fat -42g\nBold Hyderabadi flavors meet soft, spiced paneer in this classic dum-cooked biryani. (Energy: 656KCal, Carbohydrates: 45gm, Proteins: 15gm, Fats: 45gm, Sodium: 1561mg)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/5266e06d-a7a9-4df2-a220-6ad703819637_37105033-8292-4877-ba75-c340e2808ffd.jpeg",
                inStock: 1,
                isVeg: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "229461896",
                    groupName: "Top It Up With Protein",
                    choices: [
                      {
                        id: "138007995",
                        name: "Falafel Shots",
                        price: 4000,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "228308013",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                ribbon: {
                  text: "Bestseller",
                  textColor: "#ffffff",
                  topBackgroundColor: "#d53d4c",
                  bottomBackgroundColor: "#b02331",
                },
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                isBestseller: true,
                ratings: {
                  aggregatedRating: {
                    rating: "3.6",
                    ratingCount: "3 ratings",
                    ratingCountV2: "3",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#D9EFEC", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_medium",
                    ratingTextColor: "rating_medium",
                    ratingCountTextColor: "rating_medium",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "101194453",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "167720410",
                name: "Paneer Tikka Masala Bowl (Carbs - 46g)",
                category: "High-Energy Endurance Bowls",
                description:
                  "479KCal , Protein - 15g , Carbs- 46g , Fat-25g.  Smoky Paneer Tikka in a spicy , creamy gravy",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/fecaef30-4df0-43dc-807b-34956f071025_082fd27c-f79f-4e0e-b39f-d3bdc41599ac.jpeg",
                inStock: 1,
                isVeg: 1,
                price: 27900,
                finalPrice: 19900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250609888",
                    groupName: "Top It Up With Protein",
                    choices: [
                      {
                        id: "138007995",
                        name: "Falafel Shots",
                        price: 4000,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250609891",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                defaultPrice: 27900,
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "5.0",
                    ratingCount: "2 ratings",
                    ratingCountV2: "2",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                imageBadges: [
                  {
                    imageId: "merch_bau/High%20Protein%201_1.png",
                  },
                ],
                offerIds: ["f10181d2-4ea0-41d7-a6c2-cf87682c3ec7"],
                parentId: "101194465",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "167720412",
                name: "Hyderabadi Veg Biryani Bowl (Carbs - 52g)",
                category: "High-Energy Endurance Bowls",
                description:
                  "627kCal, Protein - 12g, Carbs - 52g, Fat -39g\nA vibrant mix of vegetables and aromatic spices, slow-cooked to capture the essence of Hyderabadi biryani. (Energy: 620KCal, Carbohydrates: 51gm, Proteins: 12gm, Fats: 39gm, Sodium: 1431mg)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/c847a2d1-2fbd-408e-a1bb-5aff4dcb3549_3bb569d8-2004-4d61-94b9-407a2c378a30.jpeg",
                inStock: 1,
                isVeg: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "229462235",
                    groupName: "Top It Up With Protein",
                    choices: [
                      {
                        id: "138007995",
                        name: "Falafel Shots",
                        price: 4000,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "228308760",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "4.0",
                    ratingCount: "1 rating",
                    ratingCountV2: "1",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "101194454",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "167687622",
                name: "Creamy Mushroom Masala Bowl (Carbs - 48g)",
                category: "High-Energy Endurance Bowls",
                description:
                  '"566kCal, Protein - 12g, Carbs - 48g, Fat -31g \nVelvety mushroom masala paired with soft rice."',
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/8c846c61-88d3-444f-bb46-e662971f3045_db6a4a71-58ce-486b-982e-079251ef46b9.jpeg",
                inStock: 1,
                isVeg: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250609844",
                    groupName: "Top It Up With Protein",
                    choices: [
                      {
                        id: "138007995",
                        name: "Falafel Shots",
                        price: 4000,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250609848",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                defaultPrice: 24900,
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {
                    rating: "4.2",
                    ratingCount: "5 ratings",
                    ratingCountV2: "5",
                  },
                  ratingsPresentationConfig: {
                    bgGradient: {
                      colours: ["#C8F9E5", "#00FFFFFF"],
                      gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                    },
                    ratingIconColor: "rating_very_good",
                    ratingTextColor: "rating_very_good",
                    ratingCountTextColor: "rating_very_good",
                    ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                    ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                  },
                },
                itemPriceStrikeOff: true,
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "101194445",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "166314525",
                name: "Lucknowi Veg Biryani Bowl (Carbs - 105g)",
                category: "High-Energy Endurance Bowls",
                description:
                  "849kCal, Protein - 16g, Carbs - 105g, Fat -39g\nExperience the royal flavors of Lucknow with a slow-cooked blend of spiced vegetables and fragrant biryani. (Energy: 570KCal, Carbohydrates: 49gm, Proteins: 11gm, Fats: 35gm, Sodium: 706mg)",
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/b25fd3b6-c335-4d24-8941-01410fd14121_154440d8-f73b-44c3-9086-44a119fd0d40.jpeg",
                inStock: 1,
                isVeg: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "229461571",
                    groupName: "Top It Up With Protein",
                    choices: [
                      {
                        id: "138007995",
                        name: "Falafel Shots",
                        price: 4000,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "228308291",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "100005197",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
          {
            card: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              info: {
                id: "167687627",
                name: "Falafel & Curry Bowl (Carbs - 49g)",
                category: "High-Energy Endurance Bowls",
                description:
                  '"594kCal, Protein - 11g, Carbs - 49g, Fat -38g \nCrispy falafels with Mughlai-style gravy and rice."',
                imageId:
                  "FOOD_CATALOG/IMAGES/CMS/2025/7/24/ca6f2007-e8cf-4f2a-9cd5-5444c66ca76f_0b8070c8-3537-4280-8e22-ce5e418bd730.jpeg",
                inStock: 1,
                isVeg: 1,
                price: 24900,
                finalPrice: 16900,
                variants: {},
                variantsV2: {},
                addons: [
                  {
                    groupId: "250609864",
                    groupName: "Top It Up With Protein",
                    choices: [
                      {
                        id: "138007995",
                        name: "Falafel Shots",
                        price: 4000,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 1,
                    maxFreeAddons: -1,
                  },
                  {
                    groupId: "250609868",
                    groupName: "Sip Light, Feel Right",
                    choices: [
                      {
                        id: "137809056",
                        name: "Masala Lemonade ( 94Kcal ,Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809055",
                        name: "Lemon Soda (115KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809057",
                        name: "Mint Chaas (Buttermilk) (75KCal, Fat:3g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809058",
                        name: "Lemon Ice Tea (117KCal, Fat:0g)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809059",
                        name: "Coke Zero 330ml Can (0 KCal)",
                        price: 4500,
                        inStock: 1,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                      {
                        id: "137809054",
                        name: "Jeera Masala Soda (123KCal, Fat:0g)",
                        price: 4500,
                        isVeg: 1,
                        isEnabled: 1,
                      },
                    ],
                    maxAddons: 6,
                    maxFreeAddons: -1,
                  },
                ],
                itemAttribute: {
                  vegClassifier: "VEG",
                },
                defaultPrice: 24900,
                ribbon: {},
                type: "ITEM",
                offerTags: [
                  {
                    matchText: "SILD",
                  },
                ],
                itemBadge: {},
                badgesV2: {},
                itemNudgeType: "FinalPrice",
                ratings: {
                  aggregatedRating: {},
                },
                itemPriceStrikeOff: true,
                offerIds: ["ed17d52d-e133-47ea-a215-d5583182b8f7"],
                parentId: "101194447",
              },
              analytics: {},
              hideRestaurantDetails: true,
            },
          },
        ],
        subtitleSuffix: {},
        image:
          "FOOD_CATALOG/IMAGES/CMS/2025/7/24/5a26aa89-ea7c-4be3-9caf-cf9c45108c82_0d225cf3-794d-418e-858c-d15a7aadd1f1.jpeg",
        categoryId: "59671268",
      },
    },
  },
];
