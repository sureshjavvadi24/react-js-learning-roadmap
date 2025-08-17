import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // object destructuring
  const { resData } = props;
  const res = resData.card.card.info;

  return (
    <div className="w-70 p-3">
      <img
        src={RES_IMG_URL + res.cloudinaryImageId}
        alt="Restaurant"
        className="h-40 w-full object-cover rounded-s "
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
