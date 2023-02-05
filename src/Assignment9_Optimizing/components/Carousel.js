import { IMG_CAROUSEL_CDN_URL } from "../../../Constants";
import useGetCarouselData from "../Util/useGetCarouselData";
import Shimmer from "./Shimmer";

const Carousel = (carouselData) => {
  console.log("inside the Carousel.js");
  console.log("Carousel.js - " + carouselData.data.length);
  console.log(carouselData.data[0]);

  return carouselData.data.length === 0 ? (
    <Shimmer noOfSlides={5}></Shimmer>
  ) : (
    <div className="max-h-[310]  bg-[#282c3f]  text-white">
      <div className="flex justify-between ">
        {carouselData.data?.map((card, index) => {
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
