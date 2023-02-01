import { Link } from "react-router-dom";

const CardComponent = ({
  name,
  id,
  cloudinaryImageId,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="card-component">
      <img
        className="image"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>

      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} Star</h5>
    </div>
  );
};

export default CardComponent;
