import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.png";
import MothernKitchen from "../Assets/Images/Mothern Kitchen.png";

const Title = () => {
  return (
    <div className="flex">
      <Link to={"/"}>
        <img
          className="max-h-20"
          src={Logo}
          // src="https://th.bing.com/th/id/OIP.o0vHcBHEDGNl3etftuoNcgHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7"
        ></img>
      </Link>
      <Link to={"/"}>
        <img
          className="max-h-20 "
          src={MothernKitchen}
          // src="https://th.bing.com/th/id/OIP.o0vHcBHEDGNl3etftuoNcgHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7"
        ></img>
      </Link>
    </div>
  );
};

export default Title;
