import { useState, useEffect } from "react";
import { SEWIGGY_RESTAURANT_URL } from "../../../Constants";

const useGetMenuDetials = (id) => {
  const [restaurantCompleteMenu, setRestaurantCompleteMenu] = useState(null);

  const RestaurantMenuAPIRespose = useEffect(() => {
    GetMenuDetials();

    // to keep the scrolling position at the top of the browser
    window.scrollTo(0, 0);
  }, []);

  const GetMenuDetials = async () => {
    const data = await fetch(SEWIGGY_RESTAURANT_URL + id);
    const json = await data.json();
    console.log(json?.data);

    Object.values(json?.data?.menu?.items).map((item) => {
      console.log("Name of the dishe : " + item.name);
    });

    setRestaurantCompleteMenu(json?.data);
  };

  return restaurantCompleteMenu;
};

export default useGetMenuDetials;
