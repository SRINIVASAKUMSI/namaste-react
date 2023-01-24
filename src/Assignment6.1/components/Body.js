import CardComponent from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchText, cardResponseObject) => {
  const response = cardResponseObject.filter((card) =>
    card.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("filerdata response" + cardResponseObject);
  return response;
};

export const BodyComponent = () => {
  const [searchText, setSearchText] = useState([]);
  const [serviceResponse, setserviceResponse] = useState([]);
  const [filteredServiceResponse, setfilteredServiceResponse] = useState([]);

  GetRestaurantsData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.644512&lng=77.2215346&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setserviceResponse(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredServiceResponse(json?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    console.log("kumsi- useEffect");
    GetRestaurantsData();
  }, []);

  console.log("kumsi- Out side");

  if (!serviceResponse) return null;

  return (
    <>
      <div className="container">
        <div className="search-container">
          <input
            placeholder="Search"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="nav-btn"
            onClick={() => {
              const filteredData = filterData(searchText, serviceResponse);
              setfilteredServiceResponse(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="restaurant-container">
          {filteredServiceResponse.length === 0 ? (
            // <h1>kumsi - no data </h1>
            <Shimmer></Shimmer>
          ) : (
            filteredServiceResponse.map((card) => {
              return (
                <Link to={"/restaurantmenu/" + card.data.id} key={card.data.id}>
                  <CardComponent
                    {...card.data}
                    key={card.data.id}
                  ></CardComponent>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
