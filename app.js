// Parcel is doing below things
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

import React from "react";
import ReactDOM  from "react-dom/client";

const rego = React.createElement("h1", {}, "Namaste REGO - My Darling")
const regoroot = ReactDOM.createRoot(document.getElementById("root"));
regoroot.render(rego);