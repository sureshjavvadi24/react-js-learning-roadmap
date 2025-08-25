import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./constants";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(RES_MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data.cards);
      } catch (error) {
        console.error("Error fetching restaurant info:", error);
        setResInfo(null);
      }
    };
    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantInfo;
