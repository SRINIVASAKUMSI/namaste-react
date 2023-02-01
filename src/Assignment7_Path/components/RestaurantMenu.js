import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../../Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();

  // array destructuring
  const { id } = params;
  console.log(id);

  const [restaurantCompleteMenu, setRestaurantCompleteMenu] = useState(null);

  const RestaurantMenuAPIRespose = useEffect(() => {
    GetMenuDetials();
  }, []);

  const GetMenuDetials = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.939371&lng=77.600354&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json?.data);

    // Object.values(json?.data?.menu?.items).map((item) => {
    //   console.log(item.name);
    // });
    setRestaurantCompleteMenu(json?.data);
  };

  return !restaurantCompleteMenu ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="restaurant-menu">
      <div>
        <h2> Restaurant Name : {restaurantCompleteMenu.name}</h2>
        <h3> Restaurant City : {restaurantCompleteMenu.city}</h3>
        <h4> Restaurant Area Name : {restaurantCompleteMenu.area}</h4>
        <img src={IMG_CDN_URL + restaurantCompleteMenu.cloudinaryImageId}></img>
      </div>
      <div>
        <h2> Restaurant Menu are mentioned below</h2>
        <ul>
          {/* { THIS WILL NOT WORK - MAP IS USED CURLY BRACKETS}  */}
          {/* {Object.values(restaurantCompleteMenu?.menu?.items).map((item) => {
            <li key={item.id}>{item.name}</li>;
          })} */}

          {Object.values(restaurantCompleteMenu?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
