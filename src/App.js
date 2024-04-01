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
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Restromenu from "./components/Restromenu";

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
      element: <About />,
    },
    {
      path:"/store",
      element:<Store/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/restromenu/:resId",
      element:<Restromenu/>
    }
  ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
