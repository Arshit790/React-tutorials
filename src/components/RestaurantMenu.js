import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.627981&lng=77.3648567&restaurantId=53783&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.categories[0];

  return (
    <div className="menu">
      <div className="menu-info">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h3>{avgRating} stars</h3>
      </div>

      <div className="menu-items">
        {itemCards.map((item) => (
          <div className="menu-cards">
            <div>
              <h3>{item?.card?.info?.name}</h3>
              <h3>₹{item?.card?.info?.defaultPrice / 100}</h3>
              <h3>{item?.card?.info?.description}</h3>
            </div>
            <img
              className="item-logo"
              alt="item-logo"
              src={CDN_URL + item?.card?.info?.imageId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
