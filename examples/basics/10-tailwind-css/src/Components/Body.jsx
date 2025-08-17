import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // state variable - super power full variable
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResData, setFilteredResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();
    const restaurants = json?.data?.cards || [];

    setResData(restaurants.slice(3, restaurants.length - 1));
    setFilteredResData(restaurants.slice(3, restaurants.length - 1));
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <h1>Looks like you are offline</h1>;

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full">
      <div className="flex m-5 items-center justify-between">
        <div className="w-3/4 flex gap-2.5">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="max-w-xl"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-3 py-1 rounded bg-orange-500 text-white cursor-pointer"
            onClick={() => {
              let filteredData = resData.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredResData(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="filters-container">
          <button
            className="top-rated-filter"
            onClick={() => {
              let filteredResList = resData.filter(
                (res) => res.card.card.info.avgRating > 4
              );
              // when ever state variable is updates react will re-renders the component
              setResData(filteredResList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap p-2">
        {filteredResData.length > 0 ? (
          filteredResData?.map((restaurant) => (
            <Link
              key={restaurant.card.card.info.id}
              to={"restaurant/" + restaurant.card.card.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <p className="not-found-msg">No restaurants found...</p>
        )}
      </div>
    </div>
  );
};

export default Body;
