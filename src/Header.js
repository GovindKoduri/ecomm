import React from "react";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
 
  const logoutHandler = () => {
      
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
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo"> Sign In</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__basketCount">
              {totalQuantity}
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
