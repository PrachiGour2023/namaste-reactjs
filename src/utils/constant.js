export const image_cdn_url =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

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
