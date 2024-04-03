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
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

import Error from "./components/Error";

import Nakli from "./components/Nakli";

const About=lazy(()=>import("./components/About"));

const Store=lazy(()=>import("./components/Store"));

const Cart=lazy(()=>import("./components/Cart"));

const Restromenu=lazy(()=>import("./components/Restromenu"));

const AppMain = () => (
  <div className="mainbody">
    <Header />
    <Outlet/>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppMain />,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
    },
      {
        
      path: "/about",
      element: <Suspense fallback={<Nakli></Nakli>}><About /></Suspense>,
    },
    {
      path:"/store",
      element: <Suspense fallback={<Nakli></Nakli>}><Store /></Suspense>,
    },
    {
      path:"/cart",
      element: <Suspense fallback={<Nakli></Nakli>}><Cart /></Suspense>,
    },
    {
      path:"/restromenu/:resId",
      element:<Suspense fallback={<Nakli></Nakli>}><Restromenu /></Suspense>,
    }
  ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
