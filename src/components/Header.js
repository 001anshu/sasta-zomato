import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useConnection from "../utils/useConnection";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnname, setbtnname] = useState("login");
  const check = useConnection();
  
  const cartitems=useSelector((store)=>store.cart.items);
  return (
    <div className="flex justify-between items-center bg-pink-200 m-1 rounded-lg shadow-lg">
      <div className="w-10" >
        <img src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4">
            <Link to="/cart">Cart-({cartitems.length} items)</Link>
          </li>
          <li className="p-4">Network:{check ? "🟢" : "🔴"}</li>
          <li className="p-4">
            <button
              className="login"
              onClick={() => {
                btnname === "logout"
                  ? setbtnname("login")
                  : setbtnname("logout");
              }}
            >
              {btnname}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
