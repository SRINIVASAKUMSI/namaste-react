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
      <div className="min-h-[520]">
        <div className="bg-violet-400 min-h-[40] py-2 justify-items-center">
          <input
            placeholder="Search"
            type="text"
            value={searchText}
            className=" text-black rounded-full px-4 py-.5 border-2 "
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="bg-orange-600 px-6 py-1 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-500 leading-5 border-2  border-yellow-600"
            onClick={() => {
              const filteredData = filterData(searchText, serviceResponse);
              setfilteredServiceResponse(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 space-y-5 px-3 py-5 items-baseline">
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
