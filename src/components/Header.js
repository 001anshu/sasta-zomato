import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

const [btnname,setbtnname]=useState("login");

  return (
    <div className="header">
      <div className="navicon">
        <img src={LOGO_URL}/>
        
      </div>
      <div className="navele">
        <ul>
          <li className="home" ><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li>
            <button className="login"
              onClick={()=>{
                btnname==="logout"?setbtnname("login"):setbtnname("logout");
              }}>
              {btnname}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;