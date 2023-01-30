import { IMG_CDN_URL } from "../../../Constants";

const CardComponent = ({
  name,
  id,
  cloudinaryImageId,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="min-h-[300px] max-w-[260px] drop-shadow-xl ">
      <img
        className="max-h-[260px]"
        src={IMG_CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold px-1 py-1 min-h-[40px]  bg-slate-100">{name}</h3>
      <h5 className="font-extralight text-[12px] px-1 py-1  bg-slate-150">
        {cuisines.join(", ")}
      </h5>
      <h5 className="font-semibold px-1 py-1  bg-slate-100">
        {avgRating} Star
      </h5>
      {console.log({ name, avgRating, cuisines })}
    </div>
  );
};

export default CardComponent;
