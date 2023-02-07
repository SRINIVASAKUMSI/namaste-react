import React from "react";

const Shimmer = (props) => {
  console.log("noOfSlides - " + props.noOfSlides);
  //console.log("ShimmerHeight - " + props.ShimmerHeight);
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-5 px-3 py-5 items-baseline">
      {Array(props.noOfSlides)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="{max-h-[230]  min-w-[260px] drop-shadow-xl bg-gray-200"
          >
            <img className="min-h-[190px] leading-relaxed  animate-pulse "></img>
            <h3 className="font-bold px-1 py-1 min-h-[40px] leading-relaxed  animate-pulse bg-slate-300"></h3>
            <h5 className="font-extralight text-[12px] px-1 py-1 leading-relaxed  animate-pulse bg-indigo-200"></h5>
            <h5 className="font-semibold px-1 py-1 leading-relaxed animate-pulse bg-indigo-300"></h5>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
