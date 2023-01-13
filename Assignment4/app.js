import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.o0vHcBHEDGNl3etftuoNcgHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7"
        ></img>
        <ul className="nav-items">
          <li>Profile</li>
          <li>Contact US</li>
          <li>About US</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
};

const CardResponse = {
  restoname: "Meghana Foods",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gmqqfm0lyoq5cjsadgff",
  tags: [
    "Biryani",
    "Andhra",
    " South Indian",
    " North Indian",
    " Chinese",
    "Seafood",
  ],
  rating: "3.4",
};

const CardComponent = () => {
  console.log(CardResponse.restoname);
  return (
    <div className="card-component">
      <img
        className="image"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0e8f93a56b93e43d7627c2c21bc1106c"
      ></img>
      <h3>McDonald's</h3>
      <h5>Burgers, Cafe, Desserts</h5>
      <h5>4.5 Star</h5>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <h1>Cards using hard coded CARD value</h1>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
    </div>
  );
};

const CardComponent2 = () => {
  console.log(CardResponse.restoname);
  return (
    <div className="card-component">
      <img className="image" src={CardResponse.image}></img>
      <h3>{CardResponse.restoname}</h3>
      <h5>{CardResponse.tags.join(", ")}</h5>
      <h5>{CardResponse.rating} Star</h5>
    </div>
  );
};

const BodyComponent2 = () => {
  return (
    <div className="body">
      <h1>Single Json Array</h1>
      <CardComponent2></CardComponent2>
      <CardComponent2></CardComponent2>
    </div>
  );
};

const FooterComponent = () => {
  return <h3 className="footer">this is footer componenet</h3>;
};

const PortalLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <BodyComponent2 />
      <FooterComponent />
    </>
  );
};

const mainroot = ReactDOM.createRoot(document.getElementById("root"));
mainroot.render(<PortalLayout />);
