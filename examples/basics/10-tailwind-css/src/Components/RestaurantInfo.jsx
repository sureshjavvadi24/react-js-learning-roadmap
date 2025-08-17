import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantInfo(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="res-info-container">
      <h1>{resInfo[0]?.card?.card?.text}</h1>
      <h2>Menu</h2>
      <ul>
        {resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.map(
          (item) => (
            <li key={item?.card?.info?.id}>
              {item?.card.info?.name} - ₹{item?.card.info?.price / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantInfo;
