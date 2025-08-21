import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useState, useEffect } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantInfo(resId);
  const [resInfoCards, setResInfoCards] = useState([]);
  const resInfoCategory = resInfoCards.filter(
    (cat) =>
      cat?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  const [showItem, setShowItem] = useState(0);

  useEffect(() => {
    if (resInfo) {
      const categories = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      setResInfoCards(categories || []);
    }
  }, [resInfo]);

  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="text-center m-4">
      <div>
        <p className="p-4 text-2xl font-bold">
          {resInfo[2]?.card?.card?.info?.name}
        </p>
        <div>
          <span>{resInfo[2]?.card?.card?.info?.avgRating} </span>
          <span>({resInfo[2]?.card?.card?.info?.totalRatingsString})</span>
          <p>{resInfo[2]?.card?.card?.info?.cuisines.join(", ")}</p>
        </div>
      </div>
      {resInfoCategory.map((cat, index) => (
        // controlled component
        <RestaurantCategory
          key={cat.card.card.title}
          resCategory={cat.card.card}
          showItem={showItem === index ? true : false}
          setShowItem={() => setShowItem(index === showItem ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantInfo;
