import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant-container">
      {Array(25)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-body"></div>
        ))}
    </div>
  );
};

export default Shimmer;
