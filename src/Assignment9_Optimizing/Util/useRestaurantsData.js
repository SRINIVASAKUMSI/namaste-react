import { useState, useEffect } from "react";
import { SEWIGGY_PUBLIC_URL } from "../../../Constants";

const useRestaurantsData = () => {
  const [serviceResponse, setserviceResponse] = useState([]);
  const [filteredServiceResponse, setfilteredServiceResponse] = useState([]);
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    console.log("useRestaurantsData.js - inside the useEffect");
    GetRestaurantsData();
  }, []);

  const GetRestaurantsData = async () => {
    try {
      console.log(
        "useRestaurantsData.js - before making API call - GetRestaurantsData"
      );
      const data = await fetch(SEWIGGY_PUBLIC_URL);

      if (data.status !== 200) {
        throw new Error(data.status);
      }

      const json = await data.json();
      console.log("useRestaurantsData.js - GetRestaurantsData");
      console.log(json?.data);
      console.log(json?.data?.cards[2]?.data?.data?.cards);
      console.log(json?.data?.cards[0]?.data?.data?.cards);

      setserviceResponse(json?.data?.cards[2]?.data?.data?.cards);
      setfilteredServiceResponse(json?.data?.cards[2]?.data?.data?.cards);
      setCarouselData(json?.data?.cards[0]?.data?.data?.cards);
    } catch (error) {
      // setError({ error: e.message, status: e.status })
      console.log(
        "useRestaurantsData.js - Error has happened while calling the API"
      );
    }
  };
  return [serviceResponse, filteredServiceResponse, carouselData];
};

export default useRestaurantsData;
