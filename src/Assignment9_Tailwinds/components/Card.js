import { Link } from "react-router-dom";

const CardComponent = ({
  name,
  id,
  cloudinaryImageId,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="min-h-[300px] max-w-[260px] drop-shadow-2xl bg-neutral-100">
      <img
        className="max-h-[250px]"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>

      <h3 className="font-bold px-1 py-1 min-h-[40px]">{name}</h3>
      <h5 className="font-extralight text-[12px] px-1 py-1">
        {cuisines.join(", ")}
      </h5>
      <h5 className="font-semibold px-1 py-1">{avgRating} Star</h5>
    </div>
  );
};

export default CardComponent;
