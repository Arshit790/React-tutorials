import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import GridCard from "./GridCard";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable -  Super Powerful Variable
  // ! Made a custom hook useRestaurant for all the commented code below
  // const [listOfRestaurant, setListOfRestaurant] = useState([]);
  // const [searchText, setSearchText] = useState("");
  // const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // const [gridRestaurant, setGridRestaurant] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627981&lng=77.3648567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();
  //   // console.log(json.data);
  //   // Optional Chaining
  //   // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurant

  //   setListOfRestaurant(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestaurant(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );

  //   // json.data.cards[0].card?.card?.imageGridCards
  //   setGridRestaurant(json?.data?.cards[0]?.card?.card?.imageGridCards.info);
  // };

  const [
    listOfRestaurant,
    filteredRestaurant,
    gridRestaurant,
    setFilteredRestaurant,
  ] = useRestaurant();
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline! Please check your internet connection</h1>
    );

  // Conditional Rendering

  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-card">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              // Filter the restaurants card by name
              // we need serach text
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="btn-conatiner">
          <button
            className="filter-btn"
            onClick={() => {
              // Filter the restaurants card by ratings > 4
              // resList = resList.filter((res) => res.data.avgRating > 4); - won't change UI
              // console.log(resList)
              const filteredRestaurant = listOfRestaurant.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="caraousel-container">
        {gridRestaurant.map((grid) => (
          <GridCard key={grid.id} gridData={grid} />
        ))}
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restro) => (
          <Link
            key={restro.info.id}
            style={{ textDecoration: "none", color: "black" }}
            to={"/restaurants/" + restro.info.id}
          >
            <RestaurantCard resData={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
