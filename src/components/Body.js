import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const RESTAURANTS_API =
     // "https://cors-handlers.vercel.app/api/?url=" + this also works for cors
      "https://corsproxy.io/?"+
      encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    setListOfResturant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResturant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log("json", json);
  };
  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                const resturant = listOfResturant.filter((rest) =>
                  rest.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredResturant(resturant);
              }}
            >
              search
            </button>
          </div>
          <button
            className="rating-btn"
            onClick={() => {
              const filteredList = listOfResturant.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfResturant(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="res-container">
          {filteredResturant.map((resturant) => (
            <ResturantCard key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
