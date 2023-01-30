import CardComponent from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SEWIGGY_PUBLIC_URL } from "../../../Constants";

const filterData = (searchText, cardResponseObject) => {
  const response = cardResponseObject.filter((card) =>
    card.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("filerdata response - " + cardResponseObject);
  return response;
};

export const BodyComponent = () => {
  const [searchText, setSearchText] = useState([]);
  const [serviceResponse, setserviceResponse] = useState([]);
  const [filteredServiceResponse, setfilteredServiceResponse] = useState([]);

  GetRestaurantsData = async () => {
    try {
      console.log("before making API call");
      const data = await fetch(SEWIGGY_PUBLIC_URL);

      if (data.status !== 200) {
        throw new Error(data.status);
      }
      const json = await data.json();
      console.log(json?.data);
      console.log(json?.data?.cards[2]?.data?.data?.cards);
      setserviceResponse(json?.data?.cards[2]?.data?.data?.cards);
      setfilteredServiceResponse(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      // setError({ error: e.message, status: e.status })
      console.log("Error has happened while calling the API");
    }
  };

  useEffect(() => {
    console.log("kumsi- inside the useEffect");
    GetRestaurantsData();
  }, []);

  console.log("kumsi- Out side");

  if (!serviceResponse) return null;

  return (
    <>
      <div className="min-h-[920]">
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
              const filteredData =
                searchText != ""
                  ? filterData(searchText, serviceResponse)
                  : serviceResponse;
              setfilteredServiceResponse(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 space-y-5 px-3 py-5 items-baseline">
          {filteredServiceResponse.length === 0 ? (
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
