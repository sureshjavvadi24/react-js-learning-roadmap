import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // state variable - super power full variable
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResData, setFilteredResData] = useState([]);

  // In useEffect dependency is not mandatory
  // if it is not there the callback will called every time component render
  // useEffect(() => {
  //   fetchData();
  // });

  // If it is empty array [] then the callback will called on the initial render only
  useEffect(() => {
    fetchData();
  }, []);

  // if it has something then the callback will called every time something updated
  // useEffect(() => {
  //   fetchData();
  // }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4415822&lng=78.3754448&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const restaurants = json?.data?.cards || [];

    setResData(restaurants.slice(3, restaurants.length - 1));
    setFilteredResData(restaurants.slice(3, restaurants.length - 1));
  };

  // conditional rendering

  // if (resData.length === 0) {
  //   return <Shimmer />;
  // }

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="body-top">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
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
              setFilteredResData(filteredResList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredResData.length > 0 ? (
          filteredResData?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          ))
        ) : (
          <p className="not-found-msg">No restaurants found...</p>
        )}
      </div>
    </div>
  );
};

export default Body;
