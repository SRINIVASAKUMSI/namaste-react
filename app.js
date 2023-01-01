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
import ReactDOM  from "react-dom/client";

// This is not HTML inside Javascript.... HTML like syntax
// JSX is HTML like syntax inside JS
const rego1 = <h1>Namaste REGO - JSX - My Darling</h1>


const rego = React.createElement("h1", {}, "Namaste REGO - Happy new year - My Darling")
const regoroot = ReactDOM.createRoot(document.getElementById("root"));
regoroot.render(rego1);