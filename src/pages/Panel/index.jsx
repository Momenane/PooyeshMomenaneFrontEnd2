import React from "react";
import { Switch, Route } from "react-router-dom";
import PoorsList from "./PoorsList";
import PoorsDetail from "./PoorsDetail";
import ContactAdmin from './ContactAdmin'
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import './index.css'
import PoorsHelp from "./PoorsHelp";




export default (props) => {
 
  return (
    <>
      <Switch>
        <Route  exact path="/panel/editProfile" component={EditProfile} />
        <Route  exact path="/panel/profile" component={Profile} />
        <Route   path="/panel/contactAdmin" component={ContactAdmin} />
        <Route  path="/panel/helps"   component={PoorsHelp} />
        <Route  path="/panel/poordetail/:id"   component={PoorsDetail} />
        <Route  exact path="/panel/poorsList" component={PoorsList} />
      </Switch>
    </>
  );
}

