import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Codekunst from "./pages/Codekunst";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./NavBar";
// import JumbotronPage from "./JumbotronPage";
import CodekunstDetail from "./pages/CodekunstDetail";
import Profile from "./pages/Profile";
import api from "../api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    api.refreshIfNotAnymoreLoggedIn();
  }

  handleLogoutClick(e) {
    api.logout();
  }

  render() {
    // let userId;
    // if (localStorage.getItem('user')) {
    //   userId = JSON.parse(localStorage.getItem('user'))._id;
    // }
    // console.log ("local storage" + localStorage.getItem('user'));

    return (
      <div className="App">
        <NavBar />
        {/* <JumbotronPage /> */}
        <Switch>
          <Route exact path="/" component={Codekunst} />
          <Route exact path="/codekunst" component={Codekunst} />
          <Route
            exact
            path="/codekuenste/:codekunstId"
            component={CodekunstDetail}
          />
          <Route exact path="/user/:userId" component={Profile} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          {/* <Route component={ErrorPage404} />------- TODO */}
        </Switch>
      </div>
    );
  }
}

export default App;
