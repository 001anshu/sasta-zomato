/*
header
  logo
  serch
  navitems

body
  serch
  restorant container
  restro card
Foter
  copyright
  Links
  Adress
  contact
*/
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Error from "./components/Error";

import Nakli from "./components/Nakli";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const About = lazy(() => import("./components/About"));

const Contact = lazy(() => import("./components/Contact"));

const Cart = lazy(() => import("./components/Cart"));

const Restromenu = lazy(() => import("./components/Restromenu"));

const AppMain = () => (
  <Provider store={appStore}>
    <div className="mainbody">
      <Header />
      <Outlet />
    </div>
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppMain />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Nakli></Nakli>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Nakli></Nakli>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Nakli></Nakli>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restromenu/:resId", //in case of variable we use " : "
        element: (
          <Suspense fallback={<Nakli></Nakli>}>
            <Restromenu />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
