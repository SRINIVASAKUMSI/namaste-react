// Parcel is doing below things
// ************************************************
// Hot module reloading
// How come Parcel comes to know about changes - File watchers
// bunlding
// Minify
// Cleaing the Code
// Cache while development
// Dev and production build
// Compression
// image compression
// Compatiable with older version
// Enable the https on local machine
// https on dev
// consistant hash algorithm
// Zero conflict bundler
// Tree sharing - Removing the unwanted code

import React from "react";
import ReactDOM from "react-dom/client";

// This is not HTML inside Javascript.... HTML like syntax
// JSX is HTML like syntax inside JS
// This JSX will be converted into React.createElement by babel
const rego1 = <h1>Namaste Canada - This is from JSX</h1>;

const Rego = () => {
  return <h2>Namaste Canada - This is from JSX - Function componenet</h2>;
};

const KumsiHeader = () => {
  return (
    <div>
      {Rego()} {/* Adding JSX using curly brackets */}
      <Rego /> {/* Adding JSX using angular brackets - best aproach */}
      {rego1}
      <h1>Kumsi - Functional componenet</h1>
    </div>
  );
};

// React converts the JSX object ( React.createElement ) into HTML (DOM)
const rego = React.createElement("h1", {}, "Namaste React - Happy new year");

const regoroot = ReactDOM.createRoot(document.getElementById("root"));
regoroot.render(<KumsiHeader />);
