import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.Component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop-page/Shop-Page.Component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in and sign-up/sign-in and sign-up.component";
import { auth } from "./firebase/firebase.utils.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
