import { useState, useEffect } from "react";
import { SEWIGGY_PUBLIC_URL } from "../../../Constants";
import Carousel from "./Carousel";
import CardContainer from "./CardContainer";
import { filterData } from "../Util/Helper";
import useRestaurantsData from "../Util/useRestaurantsData";

export const BodyComponent = () => {
  const [searchText, setSearchText] = useState([]);

  const [serviceResponse, filteredServiceResponse, carouselData] =
    useRestaurantsData();

  // const [serviceResponse, setserviceResponse] = useState([]);
  // const [filteredServiceResponse, setfilteredServiceResponse] = useState([]);
  // const [carouselData, setCarouselData] = useState([]);

  // const GetRestaurantsData = async () => {
  //   try {
  //     console.log("Body.js - before making API call - GetRestaurantsData");
  //     const data = await fetch(SEWIGGY_PUBLIC_URL);

  //     if (data.status !== 200) {
  //       throw new Error(data.status);
  //     }

  //     const json = await data.json();
  //     console.log("Body.js - GetRestaurantsData");
  //     console.log(json?.data);
  //     console.log(json?.data?.cards[2]?.data?.data?.cards);
  //     console.log(json?.data?.cards[0]?.data?.data?.cards);

  //     setserviceResponse(json?.data?.cards[2]?.data?.data?.cards);
  //     setfilteredServiceResponse(json?.data?.cards[2]?.data?.data?.cards);
  //     setCarouselData(json?.data?.cards[0]?.data?.data?.cards);
  //   } catch (error) {
  //     // setError({ error: e.message, status: e.status })
  //     console.log("Body.js - Error has happened while calling the API");
  //   }
  // };

  // useEffect(() => {
  //   console.log("Body.js - inside the useEffect");
  //   GetRestaurantsData();
  // }, []);

  console.log("Body.js - Out side");

  if (!serviceResponse) return null;

  return (
    <>
      <div className="min-h-[920]">
        <Carousel data={carouselData}></Carousel>
        <div className="flex  bg-violet-400  py-2 ">
          <div className="flex-auto ">
            <input
              placeholder="Search"
              type="text"
              value={searchText}
              className="w-[400px] h-6 text-black rounded-full px-4 py-.5 border-2 "
              onChange={(e) => setSearchText(e.target.value)}
            ></input>
            <button
              className="h-7 bg-orange-600 px-6 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-500 leading-5 border-2  border-yellow-600"
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
          <button className="px-5 text-white">Delivery Time</button>
          <button className="px-5 text-white">Cost: Low To High</button>
          <button className="px-5 text-white">Cost: High To Low</button>
        </div>
        <CardContainer data={filteredServiceResponse}></CardContainer>
      </div>
    </>
  );
};

export default BodyComponent;
