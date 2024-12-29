import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="p-4 m-4 w-80 rounded-lg bg-gray-50 hover:bg-gray-200 shadow">
      <img
        className="object-fill h-48 rounded-lg w-full"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <p className="truncate text-lg font-semibold py-2">{name}</p>
      <p className="truncate text-sm text-gray-600 py-2">
        {cuisines.join(", ")}
      </p>
      <div className="flex items-center justify-between text-sm font-medium">
        <span>{avgRating}⭐</span>
        <span>{deliveryTime}mins</span>
      </div>
    </div>
  );
};

// Higher Order Component - Using for promoted category in Swiggy Api (it's now not been used by Swiggy)

// input - Restaurant Card => return output RestauranCardPromoted

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default RestaurantCard;
