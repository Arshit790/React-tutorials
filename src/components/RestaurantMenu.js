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

  return (
    <div className="menu">
      <div className="menu-info" key={id}>
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h3>{avgRating} stars</h3>
      </div>
      {/* <div className="menu-items" key={item.id}>
        {output.map((item, index) => (
          <div className="menu-cards" key={index}>
            <div>
              <h3>{item.name}</h3>
              <h3>
                ₹{Math.floor(item.defaultPrice / 100 || item.price / 100)}
              </h3>
              <h3>{item.description}</h3>
            </div>
            <img
              className="item-logo"
              alt="item-logo"
              src={CDN_URL + item.imageId}
            />
          </div>
        ))}
      </div> */}

      <div className="menu-items">
        {resItem.map((category, index) => (
          <div
            key={index}
            className="category-section"
            style={{ backgroundColor: "f0f0f0", border: "1px solid black" }}
          >
            <h2 className="category-title">{category?.title}</h2>

            {category?.itemCards?.map((item) => (
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
