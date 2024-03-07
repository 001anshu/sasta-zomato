/*
header
  logo
  serch
  navitems

body
  serch
  restorant container
  restro card
Foter
  copyright
  Links
  Adress
  contact
*/
import React from "react";
import ReactDOM from "react-dom/client";

const newobj = [
  {
    info: {
      id: "425665",
      name: "Ashrafi Biryani",
      cloudinaryImageId: "kx3s9wkpt9w7stgxtyvm",
      locality: "New Taxi Stand Main Road",
      areaName: "Inda & Malancha",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani", "North Indian"],
      avgRating: 4.2,
      parentId: "37054",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ashrafi-biryani-new-taxi-stand-main-road-inda-and-malancha-kharagpur-425665",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "607332",
      name: "Scrummys",
      cloudinaryImageId: "trevbdebczbpmi2wqmbd",
      areaName: "Inda & Malancha",
      costForTwo: "₹300 for two",
      cuisines: ["Italian", "American"],
      avgRating: 4.4,
      parentId: "373094",
      avgRatingString: "4.4",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/scrummys-inda-and-malancha-kharagpur-607332",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "399278",
      name: "Abul Chacha Biryani",
      cloudinaryImageId: "biiyjzd9wm51tlgklotw",
      locality: "IIT Main Road",
      areaName: "Inda & Malancha",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Chinese", "North Indian"],
      avgRating: 4,
      parentId: "238656",
      avgRatingString: "4.0",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/abul-chacha-biryani-iit-main-road-inda-and-malancha-kharagpur-399278",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "126026",
      name: "Taaz Biryani",
      cloudinaryImageId: "jhr7i55mishzaua5ydsh",
      locality: "IIT Main Road",
      areaName: "Laitumkhrah",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Chinese", "Indian"],
      avgRating: 4.2,
      parentId: "199748",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/taaz-biryani-iit-main-road-laitumkhrah-kharagpur-126026",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "518906",
      name: "The Curry Room By Sharma Foods",
      cloudinaryImageId: "axm1odgi0itdwezq3cu9",
      locality: "IIT Main Road",
      areaName: "Inda & Malancha",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Tandoor", "Biryani"],
      avgRating: 4.3,
      parentId: "310031",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-curry-room-by-sharma-foods-iit-main-road-inda-and-malancha-kharagpur-518906",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "417881",
      name: "New Murgan vilas Restaurant",
      cloudinaryImageId: "ilhywml4pn8ktewumckx",
      locality: "Unnamed Road",
      areaName: "Inda & Malancha",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.3,
      veg: true,
      parentId: "232480",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 22:00:00",
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
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/new-murgan-vilas-restaurant-unnamed-road-inda-and-malancha-kharagpur-417881",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "500722",
      name: "Kebab Kulcha Kurries",
      cloudinaryImageId: "dmxigudb3m6uprfnr08w",
      locality: "IIT Main Road",
      areaName: "Inda & Malancha",
      costForTwo: "₹200 for two",
      cuisines: ["Indian"],
      avgRating: 4.6,
      parentId: "300040",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 22:40:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kebab-kulcha-kurries-iit-main-road-inda-and-malancha-kharagpur-500722",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "98033",
      name: "Dreamland Restaurant",
      cloudinaryImageId: "fhayzxfn2nmzsfakqmah",
      locality: "IIT Main Road",
      areaName: "Inda & Malancha",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Indian"],
      avgRating: 4.2,
      parentId: "74804",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 15:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
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
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dreamland-restaurant-iit-main-road-inda-and-malancha-kharagpur-98033",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "441627",
      name: "Any Belly",
      cloudinaryImageId: "bxsvpkw7e6fefnc0umpx",
      locality: "IIT Main Road",
      areaName: "Inda & Malancha",
      costForTwo: "₹200 for two",
      cuisines: ["Continental", "Arabian"],
      avgRating: 4.6,
      parentId: "34617",
      avgRatingString: "4.6",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/any-belly-iit-main-road-inda-and-malancha-kharagpur-441627",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "109429",
      name: "Smart Pind",
      cloudinaryImageId: "mvybtqpjuwbbf4nhos1e",
      locality: "IIT Main Gate",
      areaName: "Inda & Malancha",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 4.1,
      parentId: "189650",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/smart-pind-iit-main-gate-inda-and-malancha-kharagpur-109429",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "752851",
      name: "Grameen Kulfi",
      cloudinaryImageId: "930b886678eb9de74b5a3150bdd0f405",
      locality: "Anandnagar",
      areaName: "Kharagpur Town Dist",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.7",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/grameen-kulfi-anandnagar-kharagpur-town-dist-kharagpur-752851",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "462606",
      name: "Kathi Junction",
      cloudinaryImageId: "v2n8jj7jysbavkoij7il",
      locality: "IIT Main Road",
      areaName: "Inda & Malancha",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Indian", "Snacks"],
      avgRating: 4.5,
      parentId: "1935",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kathi-junction-iit-main-road-inda-and-malancha-kharagpur-462606",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "646341",
      name: "Haldiram's Prabhuji",
      cloudinaryImageId: "5a37d749fdbc3358d98c2c6d88017faa",
      locality: "Kharagpur City Rd",
      areaName: "Inda & Malancha",
      costForTwo: "₹450 for two",
      cuisines: [
        "Street Food",
        "North Indian",
        "Chinese",
        "South Indian",
        "Chaat",
        "Bakery",
      ],
      avgRating: 4.2,
      veg: true,
      parentId: "2945",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/haldirams-prabhuji-city-rd-inda-and-malancha-kharagpur-646341",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "405063",
      name: "Chai Sutta Bar",
      cloudinaryImageId: "xn3mwljw4h8mv2loq3bn",
      locality: "IIT Main Road",
      areaName: "Inda & Malancha",
      costForTwo: "₹200 for two",
      cuisines: ["Continental", "Italian", "Pizzas", "Beverages"],
      avgRating: 4.1,
      parentId: "14909",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 21:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chai-sutta-bar-iit-main-road-inda-and-malancha-kharagpur-405063",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "146789",
      name: "Chai Break",
      cloudinaryImageId: "vlrj43bsfd8vqyngzpjt",
      locality: "Ot Road",
      areaName: "Inda",
      costForTwo: "₹800 for two",
      cuisines: ["Indian", "Chinese", "Continental", "Beverages"],
      avgRating: 4.2,
      parentId: "234",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chai-break-ot-road-inda-kharagpur-146789",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "438144",
      name: "Cake & Bake",
      cloudinaryImageId: "ryz8cxjkkairsw4alkzh",
      locality: "Prembazar",
      areaName: "Inda & Malancha",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery"],
      avgRating: 4.2,
      parentId: "54661",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 64,
        lastMileTravel: 8.5,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cake-and-bake-prembazar-inda-and-malancha-kharagpur-438144",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "252428",
      name: "Mr. Pizza",
      cloudinaryImageId: "fbyqacfz2tp6vyepve2y",
      locality: "Iit Bye Pass Road",
      areaName: "Inda & Malancha",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "American"],
      avgRating: 4.5,
      parentId: "140348",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mr-pizza-iit-bye-pass-road-inda-and-malancha-kharagpur-252428",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "400006",
      name: "Sadda Adda",
      cloudinaryImageId: "un6qdptq2oxfcfv1esr7",
      locality: "IIT Main Gate",
      areaName: "Inda & Malancha",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "American", "Chinese"],
      avgRating: 4,
      parentId: "9122",
      avgRatingString: "4.0",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sadda-adda-iit-main-gate-inda-and-malancha-kharagpur-400006",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "100221",
      name: "Food Studio",
      cloudinaryImageId: "mmbvohwvncj1f1mzqis2",
      locality: "Jhapatapur",
      areaName: "Inda & Malancha",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Indian", "Chinese"],
      avgRating: 4.5,
      parentId: "82029",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/food-studio-jhapatapur-inda-and-malancha-kharagpur-100221",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "94171",
      name: "Domino's Pizza",
      cloudinaryImageId: "092e58460657922e098a8afd5db838fe",
      locality: "OT Road",
      areaName: "Inda",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4,
      parentId: "2456",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 23:57:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "Ratnesh_Badges/free%20del%20icon.png",
            shortDescription: "Free Delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Ratnesh_Badges/free%20del%20icon.png",
                  shortDescription: "Free Delivery",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-ot-road-inda-kharagpur-94171",
      type: "WEBLINK",
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="navicon">
        <img src="https://www.iskconcommunications.org/images/faviconiskcon.png" />
        <p>serch</p>
      </div>
      <div className="navele">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Store</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



const RestroCard = (props) => {
  const { resdata } = props;

  return (
    <div className="restrocard">
      <img
        className="food-img p5"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resdata.info.cloudinaryImageId}
      />
      <div className="food-restroName p5">
        <b>{resdata.info.name}</b>
      </div>
      <div className="food-discription p5">
        {resdata.info.cuisines.join(", ")}
      </div>
      <div className="food-rtp p5">
        <div className="rating">{resdata.info.avgRating}★</div>
        <div className="deliveryTime">{resdata.info.sla.deliveryTime}</div>
        <div className="price">{resdata.info.costForTwo}</div>
      </div>
      <div className="locality p5">{resdata.info.locality}</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="cards">

        {
          newobj.map(restr=><RestroCard key={restr.info.id} resdata={restr}/>)
        }

        
  
      </div>
    </div>
  );
};
const textobj = [
  {
    name: "anshu",
    class: "ECE",
    subject: "vlsi",
  },
];

const AppMain = () => (
  <div className="mainbody">
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppMain />);
