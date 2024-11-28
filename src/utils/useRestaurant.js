import { useState, useEffect } from "react";
const useRestaurant = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [gridRestaurant, setGridRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627981&lng=77.3648567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json.data);
    // Optional Chaining
    // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurant

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // json.data.cards[0].card?.card?.imageGridCards
    setGridRestaurant(json?.data?.cards[0]?.card?.card?.imageGridCards.info);
  };

  return [
    listOfRestaurant,
    filteredRestaurant,
    gridRestaurant,
    setFilteredRestaurant,
  ];
};

export default useRestaurant;
