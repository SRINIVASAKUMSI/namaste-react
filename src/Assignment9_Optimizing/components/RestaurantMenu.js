import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../../Constants";
import Shimmer from "./Shimmer";
import useGetMenuDetials from "../Util/useGetMenuDetials";

const RestaurantMenu = () => {
  const params = useParams();

  // array destructuring
  const { id } = params;
  console.log("Page id mentioned in the URL : " + id);

  const restaurantCompleteMenu = useGetMenuDetials(id);

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
