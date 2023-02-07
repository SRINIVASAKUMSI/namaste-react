import { IMG_CAROUSEL_CDN_URL } from "../../../Constants";
import Shimmer from "./Shimmer";

const Carousel = (props) => {
  console.log("inside the Carousel.js");
  console.log("Carousel.js - " + props.data.length);
  console.log(props.data[0]);

  return props.data.length === 0 ? (
    <Shimmer noOfSlides={4}></Shimmer>
  ) : (
    <div className="max-h-[310]  bg-[#282c3f]  text-white">
      <div className="flex justify-between ">
        {props.data?.map((card, index) => {
          return (
            <img
              key={index}
              className="max-h-[260] px-4 py-5 drop-shadow-xl hover:scale-105"
              src={IMG_CAROUSEL_CDN_URL + card?.data?.creativeId}
            ></img>
          );
        })}
      </div>
    </div>
  );
};
export default Carousel;
