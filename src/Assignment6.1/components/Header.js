import { useState } from "react";
import Logo from "../Assets/Images/Logo.png";
import Profile from "./Profile";
import AboutUs from "./AboutUs";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="header">
        <a href="/">
          <img
            className="logo"
            src={Logo}
            // src="https://th.bing.com/th/id/OIP.o0vHcBHEDGNl3etftuoNcgHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7"
          ></img>
        </a>
        <ul className="nav-btn-list">
          <li>
            <Link to="/">
              <button className="nav-btn"> Home</button>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <button className="nav-btn"> Profile</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className="nav-btn"> About Us</button>
            </Link>
          </li>
          <li>
            <button className="nav-btn">Cart</button>
          </li>
          <li>
            {isLoggedIn ? (
              <button className="nav-btn" onClick={() => setIsLoggedIn(false)}>
                Log Out
              </button>
            ) : (
              <button className="nav-btn" onClick={() => setIsLoggedIn(true)}>
                Log In
              </button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderComponent;
