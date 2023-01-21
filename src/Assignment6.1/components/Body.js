import CardComponent from "./Card";
import CardResponse from "../SwiggyResponse.js";
import { useState, useEffect } from "react";

const filterData = (searchText, cardResponseObject) => {
  const response = cardResponseObject.filter((card) =>
    card.data.name.includes(searchText)
  );
  return response;
};

export const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [cardResponseObject, setCardResponseObject] = useState(CardResponse);

  GetRestaurantsData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.644512&lng=77.2215346&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setCardResponseObject(json?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    console.log("kumsi- useEffect");
    GetRestaurantsData();
  }, []);

  console.log("kumsi- Out side");
  return (
    <>
      <div className="search-container">
        <input
          placeholder="Search"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="input-button"
          onClick={() => {
            const filteredData = filterData(searchText, CardResponse);
            setCardResponseObject(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {cardResponseObject.map((card) => {
          return (
            <CardComponent {...card.data} key={card.data.id}></CardComponent>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
