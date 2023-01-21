import CardComponent from "./Card";
import { CardComponent1 } from "./Card";
import { CardComponent2 } from "./Card";
import CardResponse from "../SwiggyResponse.js";

export const BodyComponent1 = () => {
  return (
    <div className="body">
      <h2>
        This is using Swiggy API Response. With props and passing the single
        object index hardcoded
      </h2>
      <CardComponent1></CardComponent1>
      <CardComponent1></CardComponent1>
      <CardComponent1></CardComponent1>
      <CardComponent1></CardComponent1>
    </div>
  );
};

export const BodyComponent2 = () => {
  return (
    <div className="body">
      <h2>
        This is using Swiggy API Response. Single object with index 0. No props,
        maps and speed
      </h2>
      <CardComponent2 list={CardResponse[0]}></CardComponent2>
      <CardComponent2 list={CardResponse[1]}></CardComponent2>
      <CardComponent2 list={CardResponse[3]}></CardComponent2>
      <CardComponent2 list={CardResponse[4]}></CardComponent2>
      <CardComponent2 list={CardResponse[5]}></CardComponent2>
    </div>
  );
};

export const BodyComponent = () => {
  return (
    <div className="body">
      {
        /* <h2>
        This is using Swiggy API Response. With props and passing the single
        object index
        </h2>
        <CardComponent {...CardResponse[0].data}></CardComponent>
        <CardComponent {...CardResponse[1].data}></CardComponent>
        <CardComponent {...CardResponse[2].data}></CardComponent>
        <CardComponent {...CardResponse[3].data}></CardComponent> */
        CardResponse.map((card) => {
          return (
            <CardComponent {...card.data} key={card.data.id}></CardComponent>
          );
        })
      }
    </div>
  );
};

export default BodyComponent;
