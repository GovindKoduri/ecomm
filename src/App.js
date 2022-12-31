import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  


  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header />
          {!isLoggedIn && <Login />}
          {isLoggedIn && <Checkout />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
