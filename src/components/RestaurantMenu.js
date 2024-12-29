import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestauranMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestauranMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, id } =
    resInfo?.cards[2]?.card?.card?.info;

  // const itemCards =
  // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="menu">
      <div className="flex flex-col justify-center items-center" key={id}>
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-lg font-bold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>

        {/* Catgories Accordiian */}
        {categories.map((category) => (
          <RestaurantCategory data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
