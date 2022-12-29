
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from './Login';

import { Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ isLoggedIn }, dispatch] = useStateValue();

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
          {isLoggedIn && <Checkout />}
          {!isLoggedIn && <Login />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
