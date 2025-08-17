import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./constants";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data.cards);
  };

  return resInfo;
};

export default useRestaurantInfo;
