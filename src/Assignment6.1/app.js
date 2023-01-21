import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import BodyComponent from "./components/Body";

const PortalLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

const mainroot = ReactDOM.createRoot(document.getElementById("root"));
mainroot.render(<PortalLayout />);
