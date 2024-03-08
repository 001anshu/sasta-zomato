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






const AppMain = () => (
  <div className="mainbody">
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppMain />);
