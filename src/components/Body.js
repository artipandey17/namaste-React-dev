import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.0759837&lng=72.8776559&carousel=true&third_party_vendor=1
const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant,setFilteredResturant]=useState([])
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //working
    //https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.0759837&lng=72.8776559&carousel=true&third_party_vendor=1
    //https://cors-handlers.vercel.app/api/?url=
    //lat: 19.0759837
    //lng: 72.8776559
    const RESTAURANTS_API =
      "https://cors-handlers.vercel.app/api/?url=" +
      encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
    const api =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    //const data= await fetch("https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING")
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    const data1 =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    setListOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)//15 res
    console.log("json", json);
  };
  console.log("listOfResturant.....", listOfResturant);
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
                console.log("searchText", searchText);
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
                console.log("filteredResturant", resturant);
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
              console.log("button clicked", listOfResturant);
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
