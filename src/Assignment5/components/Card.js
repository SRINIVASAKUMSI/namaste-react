import CardResponse from "../SwiggyResponse";
import { IMG_CDN_URL } from "../../Constants";

export const CardComponent1 = () => {
  console.log(CardResponse[0].data.cloudinaryImageId);
  return (
    <div className="card-component">
      <img
        className="image"
        src={IMG_CDN_URL + CardResponse[0].data.cloudinaryImageId}
      ></img>
      <h3>{CardResponse[0].data.name}</h3>
      <h5>{CardResponse[0].data.cuisines.join(", ")}</h5>
      <h5>{CardResponse[0].data.avgRating} Star</h5>
    </div>
  );
};

export const CardComponent2 = (props) => {
  console.log(props.list.data.name);
  return (
    <div className="card-component">
      <img
        className="image"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.list.data.cloudinaryImageId
        }
      ></img>
      <h3>{props.list.data.name}</h3>
      <h5>{props.list.data.cuisines.join(", ")}</h5>
      <h5>{props.list.data.avgRating} Star</h5>
    </div>
  );
};

const CardComponent = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
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
