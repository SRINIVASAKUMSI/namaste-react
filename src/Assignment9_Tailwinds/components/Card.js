import { Link } from "react-router-dom";

const CardComponent = ({
  name,
  id,
  cloudinaryImageId,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="max-h-[450px] max-w-[260px]  drop-shadow-2xl bg-neutral-100">
      <img
        className="max-h-[250px]"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>

      <h3 className="font-bold">{name}</h3>
      <h5 className="font-light whitespace-nowrap">{cuisines.join(", ")}</h5>
      <h5 className="font-semibold">{avgRating} Star</h5>
    </div>
  );
};

export default CardComponent;
