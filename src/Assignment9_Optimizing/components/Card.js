import { IMG_CDN_URL } from "../../../Constants";

const CardComponent = ({
  name,
  id,
  cloudinaryImageId,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="min-h-[300px] max-w-[260px] drop-shadow-xl hover:scale-105">
      <img
        className="max-h-[260px]"
        src={IMG_CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold px-1 py-1 min-h-[35x]  bg-slate-100">{name}</h3>
      <h5 className="font-extralight text-[12px] px-1 py-1  bg-slate-150">
        {cuisines.join(", ")}
      </h5>
      <h5 className="flex justify-between">
        <p className="flex min-w-[50px] max-h-[20px] pr-1 bg-green-300">
          <svg
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[12px] font-semibold"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          {avgRating}
        </p>
        <p>*</p>
        <p className="text-[12px] px-1 py-1 ">{slaString}</p>
        <p>*</p>
        <p className="text-[12px] px-1 py-1  ">{costForTwoString}</p>
        {}
      </h5>
      {/* {console.log({ name, avgRating, cuisines })} */}
    </div>
  );
};

export default CardComponent;
