import { useState } from "react";
import Profile from "./Profile";
import AboutUs from "./AboutUs";
import { Link } from "react-router-dom";
import Title from "./Title";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="flex justify-between max-h-20 bg-white shadow-2xl">
        <Title></Title>
        <ul className="flex py-6 pr-5 space-x-5">
          <li>
            <Link to="/">
              <button className="bg-orange-600 px-6 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-500 leading-5 border-2  border-yellow-600">
                {" "}
                Home{" "}
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <button
                className="bg-orange-600 px-6 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-500 leading-5 border-2  border-yellow-600"
                bg-indigo-600
              >
                {" "}
                Profile
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className="bg-orange-600 px-6 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-500 leading-5 border-2  border-yellow-600">
                {" "}
                About Us
              </button>
            </Link>
          </li>
          <li>
            <button className="bg-orange-600 px-6 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-500 leading-5 border-2  border-yellow-600">
              Cart
            </button>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                className="min-w-[150px] bg-orange-600 px-10 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-500 leading-5 border-2  border-yellow-600"
                onClick={() => setIsLoggedIn(false)}
              >
                Log Out
              </button>
            ) : (
              <button
                className="min-w-[150px] bg-orange-600 px-10 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-500 leading-5 border-2  border-yellow-600"
                onClick={() => setIsLoggedIn(true)}
              >
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
