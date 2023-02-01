import { IMG_CAROUSEL_CDN_URL } from "../../../Constants";
import Shimmer from "./Shimmer";

const Carousel = (Carousel) => {
  console.log("carousel");
  console.log(Carousel);
  console.log(Carousel.data);
  const CarouselLength = Carousel.data.length;
  console.log("CarouselLength - " + CarouselLength);

  return CarouselLength === 0 ? (
    <Shimmer noOfSlides={5}>ddd</Shimmer>
  ) : (
    <div className="max-h-[310]  bg-[#282c3f]  text-white">
      <div className="flex justify-between ">
        {Carousel.data?.map((card, index) => {
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
