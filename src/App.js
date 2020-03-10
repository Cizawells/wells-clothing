import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.Component";
import { Route, Switch } from "react-router-dom";
function HatsPage(props) {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
