import React from "react";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Header.css";
import { authActions } from "./store/auth-slice";

function Header() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  console.log("isLoggedIn: " + isLoggedIn);
 
  const logoutHandler = () => {
    console.log("User logged out !!!");
    localStorage.removeItem("id_token");
    dispatch(authActions.logout());
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
              {totalQuantity}
            </span>
          </div>
        </Link>
        {isLoggedIn && (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="nav__item">
              <button className="nav__itemLineTwo" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
