import { useState, useEffect } from "react";

const useGetCarouselData = () => {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    GetCarouselData();
  }, []);

  const GetCarouselData = async () => {
    console.log("Body.js - before making API call for - GetCarouselData");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=56417&offset=0&pageType=COLLECTION&type=rcv2"
    );

    if (data.status !== 200) {
      throw new Error(data.status);
    }

    const json = await data.json();
    console.log("useGetCarouselData.js - " + json);
    console.log("useGetCarouselData.js - " + json.data);
    setCarousel(json.data);
  };

  return carousel;
};
export default useGetCarouselData;
