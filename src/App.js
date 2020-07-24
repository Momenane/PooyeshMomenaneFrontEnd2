import React,{useState} from "react";
import { Route, Switch } from "react-router-dom";
import auth from './services/AuthService'
// import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Needy from "./pages/Needy";
import Volunteer from "./pages/Volunteer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Panel from "./pages/Panel";
import PrivateRoute from "./components/PrivateRoute";



function App(props) {
const [userToken] = useState(auth.getJwt())
  return (
    <>
      <Switch>
        <PrivateRoute
          path="/panel"
          userToken={userToken}
          {...props}
          component={Panel}
          />
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={Signup} />
        <Route path="/needy" component={Needy}/>
        <Route path="/volunteer" component={Volunteer}/>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
