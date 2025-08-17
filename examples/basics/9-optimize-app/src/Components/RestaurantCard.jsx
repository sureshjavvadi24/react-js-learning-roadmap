import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // object destructuring
  const { resData } = props;
  const res = resData.card.card.info;

  return (
    <div className="res-card">
      <img
        src={RES_IMG_URL + res.cloudinaryImageId}
        alt="Restaurant"
        className="dish-image"
      />
      <h3>{res.name}</h3>
      <p>{res.avgRatingString}⭐</p>
      <p>{res.sla.slaString}</p>
      <p>{res.costForTwo}</p>
      <p>{res.cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;
