import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../../Constants";
import Shimmer from "./Shimmer";
import { SEWIGGY_RESTAURANT_URL } from "../../../Constants";

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
    const data = await fetch(SEWIGGY_RESTAURANT_URL + id);
    const json = await data.json();
    console.log(json?.data);

    // Object.values(json?.data?.menu?.items).map((item) => {
    //   console.log(item.name);
    // });
    setRestaurantCompleteMenu(json?.data);
  };

  return !restaurantCompleteMenu ? (
    <Shimmer noOfSlides={15}></Shimmer>
  ) : (
    <div className="">
      <div className="max-h-[310]  bg-[#282c3f]  text-white">
        <div className="flex justify-center">
          <img
            className="max-h-[250] px-3 py-6"
            src={IMG_CDN_URL + restaurantCompleteMenu.cloudinaryImageId}
          ></img>
          <div className="py-5 pl-6">
            <h2 className="font-bold text-[30px]">
              {restaurantCompleteMenu.name}
            </h2>
            <h4 className="h-15 text-[15px]">
              {restaurantCompleteMenu.cuisines.join(", ")}
            </h4>
            <h4 className="h-50 text-[15px]">
              {restaurantCompleteMenu.locality}, {restaurantCompleteMenu.area},{" "}
              {restaurantCompleteMenu.city}
            </h4>
            <div className="flex my-7">
              <div>
                <h3 className="text-[15px] font-bold">
                  {restaurantCompleteMenu.avgRating}
                </h3>
                <h3 className="text-[13px] font-semibold">
                  {restaurantCompleteMenu.totalRatingsString}
                </h3>
              </div>
              <div className="mx-9">
                <h3 className="text-[15px] font-bold">
                  {restaurantCompleteMenu.sla.slaString}
                </h3>
                <h3 className="text-[13px] font-semibold">Delivery Time</h3>
              </div>{" "}
              <div className="mx-7">
                <h3 className="text-[15px] font-bold">
                  {restaurantCompleteMenu.costForTwoMsg}
                </h3>
                <h3 className="text-[13px] font-semibold"> Cost for two</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold">
          Restaurant Menu are mentioned below <br></br>
        </h2>

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
