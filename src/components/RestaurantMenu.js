import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  // const itemCards =
  // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const item = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const resItem = item
    .filter((res) => {
      if (
        res?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
        return res?.card?.card;
    })
    .map((item) => item.card.card.itemCards);

  const output = resItem.flat().map((item) => item?.card?.info);
  return (
    <div className="menu">
      <div className="menu-info">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h3>{avgRating} stars</h3>
      </div>
      {/* <div className="menu-items">
        {itemCards.map((item) => (
          <div key={item.card?.info?.id} className="menu-cards">
            <div>
              <h3>{item.card?.info?.name}</h3>
              <h3>
                ₹
                {Math.floor(
                  item.card?.info?.defaultPrice / 100 ||
                    item.card?.info?.price / 100
                )}
              </h3>
              <h3>{item.card?.info?.description}</h3>
            </div>
            <img
              className="item-logo"
              alt="item-logo"
              src={CDN_URL + item.card?.info?.imageId}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
