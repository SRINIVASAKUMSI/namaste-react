import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SEWIGGY_PUBLIC_URL } from "../../../Constants";
import Carousel from "./Carousel";
import CardContainer from "./CardContainer";
import Shimmer from "./Shimmer";
import { IMG_CAROUSEL_CDN_URL } from "../../../Constants";

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
  const [carousel, setCarousel] = useState([]);
  const [carouselCollectionID, SetcarouselCollectionID] = useState([]);

  GetRestaurantsData = async () => {
    try {
      console.log("before making API call - GetRestaurantsData");
      const data = await fetch(SEWIGGY_PUBLIC_URL);

      if (data.status !== 200) {
        throw new Error(data.status);
      }

      const json = await data.json();
      console.log("GetRestaurantsData");
      console.log(json?.data);
      console.log(json?.data?.cards[2]?.data?.data?.cards);
      console.log(json?.data?.cards[0]?.data?.data?.cards);

      setserviceResponse(json?.data?.cards[2]?.data?.data?.cards);
      setfilteredServiceResponse(json?.data?.cards[2]?.data?.data?.cards);
      setCarousel(json?.data?.cards[0]?.data?.data?.cards);

      console.log("carousel.data");
      console.log(carousel);
    } catch (error) {
      // setError({ error: e.message, status: e.status })
      console.log("Error has happened while calling the API");
    }
  };

  const GetCarouselData = async () => {
    console.log("before making API call for - GetCarouselData");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=56417&offset=0&pageType=COLLECTION&type=rcv2"
    );

    if (data.status !== 200) {
      throw new Error(data.status);
    }

    const json = await data.json();
    console.log("GetCarouselData");
    console.log(json.data);
    console.log("GetCarouselData");
  };

  useEffect(() => {
    console.log("kumsi- inside the useEffect");
    GetRestaurantsData();
  }, []);

  useEffect(() => {
    GetCarouselData();
  }, []);

  console.log("kumsi- Out side");

  if (!serviceResponse) return null;

  return (
    <>
      <div className="min-h-[920]">
        {/* <Carousel data={carousel}></Carousel> */}
        {/* carousel.data.length === 0 ? (<Shimmer noOfSlides={5}>ddd</Shimmer>) : ( */}
        <div className="max-h-[310]  bg-[#282c3f]  text-white">
          <div className="flex justify-between ">
            {carousel.map((card, index) => {
              return (
                <img
                  key={index}
                  className="max-h-[260] px-4 py-5 drop-shadow-xl hover:scale-105"
                  src={IMG_CAROUSEL_CDN_URL + card?.data?.creativeId}
                  // onClick={() => {
                  //   filterData(searchText, serviceResponse);
                  //   setfilteredServiceResponse(filteredData);
                  // }}
                ></img>
              );
            })}
          </div>
        </div>
        {/* ) */}
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
          <button
            onClick={() => {
              const filteredData =
                searchText != ""
                  ? filterData(searchText, serviceResponse)
                  : serviceResponse;
              setfilteredServiceResponse(filteredData);
            }}
            className="px-5 text-white"
          >
            Delivery Time
          </button>
          <button className="px-5 text-white">Cost: Low To High</button>
          <button className="px-5 text-white">Cost: High To Low</button>
        </div>
        <CardContainer data={filteredServiceResponse}></CardContainer>
      </div>
    </>
  );
};

export default BodyComponent;
