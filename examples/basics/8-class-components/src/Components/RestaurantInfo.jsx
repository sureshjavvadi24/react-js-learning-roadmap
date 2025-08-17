import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_MENU_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState([]);
  const [resMenu, setResMenu] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    const menu =
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
        ?.card?.itemCards;
    setResInfo(json.data.cards);
    setResMenu(menu);
  };

  if (resInfo.length === 0 || resMenu?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="res-info-container">
      <h1>{resInfo[0]?.card?.card?.text}</h1>
      <h2>Menu</h2>
      <ul>
        {resMenu?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card.info?.name} - ₹{item?.card.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantInfo;
