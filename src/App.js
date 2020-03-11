import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.Component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop-page/Shop-Page.Component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
