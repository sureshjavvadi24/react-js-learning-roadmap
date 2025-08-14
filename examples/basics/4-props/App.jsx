import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-f150-61fd-9779-3d243b6fbc4d/raw?se=2025-08-13T17%3A37%3A42Z&sp=r&sv=2024-08-04&sr=b&scid=5dbfacf6-ec28-5454-a614-0575e5933264&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-13T01%3A13%3A38Z&ske=2025-08-14T01%3A13%3A38Z&sks=b&skv=2024-08-04&sig=DsucdQVqB/i5rl2LqI3AFQK/xdIsPqs%2BBWsN3wbPC3I%3D"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "999023",
          name: "Raju Gari Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/2/19/797c12af-4ec2-404b-a64f-65d344947e4a_5f697aa5-7590-417e-8ae0-a231fc8fadd2.jpeg",
          locality: "Ameerpet",
          areaName: "Ameerpet",
          costForTwo: "₹300 for two",
          cuisines: ["Chinese", "Biryani"],
          avgRating: 4,
          parentId: "165947",
          avgRatingString: "4.0",
          totalRatingsString: "6.5K+",
          promoted: true,
          adTrackingId:
            "cid=9999295e-c82e-4994-8ddf-2345140397dd~p=1~adgrpid=9999295e-c82e-4994-8ddf-2345140397dd#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=999023~plpr=COLLECTION~eid=b037a96d-5cc8-4088-88cd-0f96e901c43e~srvts=1755098585256~collid=83639",
          sla: {
            deliveryTime: 47,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "45-55 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-14 03:30:00",
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
            header: "60% OFF",
            subHeader: "UPTO ₹120",
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
          campaignId: "9999295e-c82e-4994-8ddf-2345140397dd",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=999023&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "398865",
          name: "Satti babu Biryani",
          cloudinaryImageId: "pswsq1dnkwh9cf86m3xe",
          locality: "Moosapet",
          areaName: "Ameerpet",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "Andhra",
            "Beverages",
            "Hyderabadi",
            "Fast Food",
            "Snacks",
            "Indian",
          ],
          avgRating: 4.1,
          parentId: "254591",
          avgRatingString: "4.1",
          totalRatingsString: "18K+",
          sla: {
            deliveryTime: 61,
            lastMileTravel: 2.8,
            serviceability: "SERVICEABLE",
            slaString: "60-70 mins",
            lastMileTravelString: "2.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-13 23:59:00",
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
            header: "₹75 OFF",
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
              rating: "3.3",
              ratingCount: "4.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=398865&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "805434",
          name: "Mehfil",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/1ff2dc8b-fd1e-460a-860b-9380974c5400_805434.jpg",
          locality: "Mahatma Gandhi Nagar",
          areaName: "Ameerpet",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Chinese", "Kebabs", "Tandoor"],
          avgRating: 4.2,
          parentId: "637",
          avgRatingString: "4.2",
          totalRatingsString: "41K+",
          promoted: true,
          adTrackingId:
            "cid=b3a286a4-58c2-4f5b-95b0-e286ab78dfcc~p=3~adgrpid=b3a286a4-58c2-4f5b-95b0-e286ab78dfcc#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=805434~plpr=COLLECTION~eid=5e0007a4-92ac-430b-a664-cbab7933cc0a~srvts=1755098585256~collid=83639",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "4.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-13 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
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
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹133",
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
          campaignId: "b3a286a4-58c2-4f5b-95b0-e286ab78dfcc",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=805434&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "80805",
          name: "Victoria Restaurant",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/2/15/cdbb40c3-da59-48d3-86c5-112e61085efb_eaf76373-5f65-47f7-bfba-6a907a40a65b.jpg",
          locality: "Moosapet",
          areaName: "Ameerpet",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Indian", "Chinese", "Tandoor"],
          avgRating: 3.9,
          parentId: "19783",
          avgRatingString: "3.9",
          totalRatingsString: "23K+",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-14 04:00:00",
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
            subHeader: "AT ₹125",
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
              rating: "1.0",
              ratingCount: "<3",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=80805&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "957350",
          name: "Big Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/21/0c65ccae-60a7-463f-ab68-4ea44681fa63_957350.jpg",
          locality: "Kukatpally Circle No 24",
          areaName: "Ashoka One Mall",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Tibetan", "Desserts"],
          avgRating: 3.9,
          parentId: "434792",
          avgRatingString: "3.9",
          totalRatingsString: "208",
          promoted: true,
          adTrackingId:
            "cid=31990260~p=4~adgrpid=31990260#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=957350~plpr=COLLECTION~eid=4c2d205c-0b38-4c42-82b2-e9f1df425204~srvts=1755098585256~collid=83639",
          sla: {
            deliveryTime: 61,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "60-65 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-13 23:00:00",
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
          campaignId: "31990260",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=957350&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "172111",
          name: "Hotel Shadab",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/22/a09f41f4-d37d-48af-a140-13255ac09561_0ef4f67d-6b2a-4773-ad20-83a804292e4b.jpg",
          locality: "SR Nagar",
          areaName: "SR Nagar",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Chinese", "Haleem"],
          avgRating: 4.2,
          parentId: "19124",
          avgRatingString: "4.2",
          totalRatingsString: "61K+",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-13 23:59:00",
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
            header: "60% OFF",
            subHeader: "UPTO ₹120",
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
              rating: "3.9",
              ratingCount: "4.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=172111&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1198",
          name: "The Spicy Venue",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/14/2d590619-cc13-4895-b07e-3257a5f11580_711d044b-7179-4745-94a0-9af316c47331.jpg",
          locality: "Jubilee Hills",
          areaName: "Jubilee Hills",
          costForTwo: "₹800 for two",
          cuisines: [
            "Biryani",
            "Andhra",
            "Kebabs",
            "Mughlai",
            "Tandoor",
            "Desserts",
            "Bakery",
          ],
          avgRating: 4.5,
          parentId: "6227",
          avgRatingString: "4.5",
          totalRatingsString: "96K+",
          promoted: true,
          adTrackingId:
            "cid=b62bb9af-a80b-4f8a-b6fe-dbc5b6f73b08~p=6~adgrpid=b62bb9af-a80b-4f8a-b6fe-dbc5b6f73b08#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1198~plpr=COLLECTION~eid=ff821c07-3c61-4e49-b05b-605bfc0c57eb~srvts=1755098585256~collid=83639",
          sla: {
            deliveryTime: 54,
            lastMileTravel: 4.3,
            serviceability: "SERVICEABLE",
            slaString: "50-55 mins",
            lastMileTravelString: "4.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-13 23:00:00",
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
            header: "₹75 OFF",
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
              rating: "4.0",
              ratingCount: "16K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "b62bb9af-a80b-4f8a-b6fe-dbc5b6f73b08",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1198&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const resObj = {
  resName: "Hotel Shadab",
  rating: "4.5",
  cuisine: "Biryani, Chinese, Haleem",
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants and dishes"
          className="search-input"
        />
      </div>
      <div className="restaurant-container">
        {/* <RestaurantCard
          resName="Hotel Shadab"
          rating="4.5"
          cuisine="Biryani, Chinese, Haleem"
        /> */}
        {/* <RestaurantCard resData={resObj} /> */}
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} /> */}
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

// const RestaurantCard = (props) => {
//   return (
//     <div>
//       <h3>{props.resName}</h3>
//       <h3>{props.rating}</h3>
//     </div>
//   );
// };

const RestaurantCard = (props) => {
  // object destructuring
  const { resData } = props;
  const res = resData.card.card.info;

  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          res.cloudinaryImageId
        }
        alt="Restaurant"
        className="dish-image"
      />
      <h3>{res.name}</h3>
      <p>{res.avgRatingString}⭐</p>
      <p>{res.sla.slaString}</p>
      <p>{res.costForTwo}</p>
      <p>{res.cuisines.join(", ")}</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
