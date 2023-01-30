import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="flex justify-between max-h-20 bg-white shadow-2xl">
        <Title></Title>
        <ul className="flex py-6 pr-5 space-x-4">
          <li>
            <Link to="/">
              <button className="text-[13px] bg-orange-500 px-6 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-400 leading-5 border-2  border-yellow-600">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <button className="text-[13px] bg-orange-500 px-6 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-400 leading-5 border-2  border-yellow-600">
                Profile
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className="text-[13px] bg-orange-500 px-6 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-400 leading-5 border-2  border-yellow-600">
                About Us
              </button>
            </Link>
          </li>
          <li>
            <button className="text-[13px] bg-orange-500 px-6 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-400 leading-5 border-2  border-yellow-600">
              Cart
            </button>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                className="text-[13px] min-w-[120px] bg-orange-500 px-5 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-400 leading-5 border-2  border-yellow-600"
                onClick={() => setIsLoggedIn(false)}
              >
                Log Out
              </button>
            ) : (
              <button
                className="text-[13px] min-w-[120px] bg-orange-500 px-5 py-1.5 font-bold text-white rounded-full active:bg-orange-700 hover:bg-orange-400 leading-5 border-2  border-yellow-600"
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
