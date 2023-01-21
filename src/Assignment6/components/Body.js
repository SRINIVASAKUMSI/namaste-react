import CardComponent from "./Card";
import CardResponse from "../SwiggyResponse.js";
import { useState } from "react";

export const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
  const [cardResponseObject, setCardResponseObject] = useState(CardResponse);

  const filterData = (searchText, cardResponseObject) => {
    const response = cardResponseObject.filter((card) =>
      card.data.name.includes(searchText)
    );
    return response;
  };


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
            if (searchClicked === "true") {
              setSearchClicked("false");
            } else {
              setSearchClicked("true");
            }

            const filteredData = filterData(searchText, cardResponseObject);
            setCardResponseObject(filteredData);
          }}
        >
          Search
        </button>
        <h1>{searchText}</h1>
        <h1>{searchClicked}</h1>
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
