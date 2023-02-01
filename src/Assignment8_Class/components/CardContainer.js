import CardComponent from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const CardContainer = (filteredServiceResponse) => {
  console.log("inside CardComponent");
  console.log(filteredServiceResponse);
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-5 px-3 py-5 items-baseline">
      {filteredServiceResponse.data.length === 0 ? (
        <Shimmer noOfSlides={25}></Shimmer>
      ) : (
        filteredServiceResponse.data.map((card) => {
          return (
            <Link to={"/restaurantmenu/" + card.data.id} key={card.data.id}>
              <CardComponent {...card.data} key={card.data.id}></CardComponent>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default CardContainer;
