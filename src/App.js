import { Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
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
