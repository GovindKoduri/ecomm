import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function Header() {
    const [{ basket, isLoggedIn }, dispatch] = useStateValue();

    const logoutHandler = () => {
      dispatch({
        type: "LOG_OUT",
        token: null,
        basket: []
      });

    }
 
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          {!isLoggedIn && (
            <div className="nav__item">
              <span className="nav__itemLineOne">Hello Guest</span>
              <span className="nav__itemLineTwo"> Sign In</span>
            </div>
          )}

          {isLoggedIn && (
            <div className="nav__item">
              <span className="nav__itemLineOne">Welcome</span>
              <span className="nav__itemLineTwo"> User</span>
            </div>
          )}
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>

        <div className="nav__item">
          <button className="nav__itemLineTwo" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
