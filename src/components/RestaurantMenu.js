import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import useRestauranMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [toggle, setToggle] = useState({});
  const resInfo = useRestauranMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, id } =
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
    .map((item) => item?.card?.card);

  const handleToggle = (index) => {
    setToggle((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="menu">
      <div className="menu-info" key={id}>
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h3>{avgRating} stars</h3>
      </div>

      <div className="menu-items">
        {resItem.map((category, index) => (
          <div
            key={index}
            className="category-section"
            style={{ backgroundColor: "f0f0f0", border: "1px solid black" }}
          >
            <div className="category-title">
              <h3>{category?.title}</h3>
              <button
                className="toggle-btn"
                onClick={() => handleToggle(index)}
              >
                <IoIosArrowDropdown size={25} />
              </button>
            </div>
            {toggle[index] &&
              category?.itemCards?.map((item) => (
                <div className="menu-cards" key={item?.card?.info?.id}>
                  <div>
                    <h3>{item?.card?.info?.name}</h3>
                    <h3>
                      ₹
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </h3>
                    <p>{item?.card?.info?.description}</p>
                  </div>
                  <img
                    className="item-logo"
                    alt="item-logo"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
