const RestaurantCategory = ({ data }) => {
  return (
    <div className="w-6/12">
      {/* Header */}
      <div className="flex justify-between text-center bg-gray-50 shadow-lg p-4 my-4 mx-auto">
        <span className="font-bold">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
