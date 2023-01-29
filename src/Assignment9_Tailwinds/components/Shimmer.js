import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-5 px-3 py-5">
      {Array(25)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="max-h-[450px] max-w-[260px] drop-shadow-2xl bg-neutral-100"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
