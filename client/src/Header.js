import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import { ShoppingCart } from "@material-ui/icons";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const handleAuthentication = () => {
    if (user) {
      localStorage.removeItem("user");
      dispatch({
        type: "SET_USER",
        user: null,
      });
    } else navigate("/login");
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={"/kisankart.png"} alt="kisan-logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? user.email : "guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "SignOut" : "SignIn"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Mandi</span>
          <span className="header__optionLineTwo">MarketPlace</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCart />
            <span className="header__optionLineTwo">Cart</span>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
