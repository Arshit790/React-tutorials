import { GRID_URL } from "../utils/constants";
const GridCard = ({ gridData }) => {
  const { imageId } = gridData;
  return (
    <div className="w-40 flex-shrink-0 bg-gray-100 rounded-lg snap-start">
      <img
        className="w-full h-30 object-cover rounded-lg"
        src={GRID_URL + imageId}
      />
    </div>
  );
};

export default GridCard;
