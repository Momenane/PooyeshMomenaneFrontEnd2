import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Needy from "./pages/Needy";
import Volunteer from "./pages/Volunteer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Panel from "./pages/Panel";

function App() {
  return (
    <>
      <Switch>
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={Signup} />
        <Route  path="/panel" component={Panel}/>
        <Route path="/needy" component={Needy}/>
        <Route path="/volunteer" component={Volunteer}/>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
