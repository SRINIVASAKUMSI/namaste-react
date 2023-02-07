import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Offers from "./components/Offers";
import Error from "./components/Error";
import AboutUsClass from "./components/AboutUsClass";
import Shimmer from "./components/Shimmer";

// Chunking
// Code splitting
// Dynamic loading
// Lazy loading
// ondemand loading
// Dynamic import

const AboutUsClassLazy = lazy(() => import("./components/AboutUsClass"));
const RestaurantMenuLazy = lazy(() => import("./components/RestaurantMenu"));
// Upen on demand loading -> Upen render -> Suspend loading

const PortalLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
          <Suspense fallback={"Loading...."}>
            <AboutUsClassLazy
              Name={"Srinivasa Kumsi"}
              Place={"Toronto"}
              Country={"Canada"}
            />
          </Suspense>
        ),
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restaurantmenu/:id",
        element: (
          <Suspense fallback={<Shimmer noOfSlides={15}></Shimmer>}>
            <RestaurantMenuLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

const mainroot = ReactDOM.createRoot(document.getElementById("root"));
mainroot.render(<RouterProvider router={appRouter} />);
//mainroot.render(<Profile />);
//mainroot.render(<AboutUs />);
//mainroot.render(<PortalLayout />);
