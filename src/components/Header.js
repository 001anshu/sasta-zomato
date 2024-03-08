import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="navicon">
        <img src={LOGO_URL}/>
        
      </div>
      <div className="navele">
        <ul>
          <li className="home" >Home</li>
          <li>About</li>
          <li>Store</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;