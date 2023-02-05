import AboutUsClass from "./AboutUsClass";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div>
      <Link to="/about">
        <h3 className="bg-orange-500 text-white font-semibold text-center">
          Developed by - Srinivasa Kumsi
        </h3>
      </Link>
    </div>
  );
};

export default FooterComponent;
