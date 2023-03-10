import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Offers from "./components/Offers";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import AboutUsClass from "./components/AboutUsClass";

const PortalLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PortalLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: (
          <AboutUsClass
            Name={"Srinivasa Kumsi"}
            Place={"Toronto"}
            Country={"Canada"}
          />
        ),
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restaurantmenu/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const mainroot = ReactDOM.createRoot(document.getElementById("root"));
mainroot.render(<RouterProvider router={appRouter} />);
//mainroot.render(<Profile />);
//mainroot.render(<AboutUs />);
//mainroot.render(<PortalLayout />);
