import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
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
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
