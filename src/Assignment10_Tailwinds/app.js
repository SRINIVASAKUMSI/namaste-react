import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Profile from "./components/Profile";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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
        element: <AboutUs />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
