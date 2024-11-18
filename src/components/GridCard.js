import { GRID_URL } from "../utils/constants";
const GridCard = ({ gridData }) => {
  const { imageId } = gridData;
  return (
    <div className="grid-card" style = {{ backgroundColor: "#f0f0f0" }}>
      <img className="grid-logo" alt="grid-logo" src={GRID_URL + imageId} />
    </div>
  );
};

export default GridCard;
