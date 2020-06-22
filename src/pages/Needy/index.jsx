import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import WhatTheyNeed from "./WhatTheyNeed";
import NeedyInfo from "./NeedyInfo";
import NeedyAuthSms from "./NeedyAuthSms";
import "./index.css";

export default () => {
  const [needyName, setNeedyName] = useState("");
  const [needyLastname, setNeedyLastname] = useState("");
  const [needyBirthDate, setNeedyBirthDate] = useState("");
  const [needyZipCode, setNeedyZipCode] = useState("");
  const [needyPhonenumber, setNeedyPhonenumber] = useState("");
  const [needyAddress, setNeedyAddress] = useState("");
  const [needyNumberOfMembers, setNeedyNumberOfMembers] = useState("");
  const [textDesc, setTextDesc] = useState("");

  const [select, setSelect] = useState("");
  const [switch1, setSwitch] = useState(false);

  const [kind, setKind] = useState({
    id: 1,
    name: "غذا",
    nameEng: "food",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "needyName") {
      setNeedyName(value);
    } else if (name === "needyLastname") {
      setNeedyLastname(value);
    } else if (name === "needyBirthDate") {
      setNeedyBirthDate(value);
    } else if (name === "needyZipCode") {
      setNeedyZipCode(value);
    } else if (name === "needyPhonenumber") {
      setNeedyPhonenumber(value);
    } else if (name === "needyAddress") {
      setNeedyAddress(value);
    } else if (name === "textDesc") {
      setTextDesc(value);
    } else {
      setNeedyNumberOfMembers(value);
    }
  };

  const onSwitchHandler = (swich) => {
    setSwitch(swich);
    console.log("switch", swich);
  };
  const onChangeSelect = (select) => {
    setSelect(select);
    console.log("switch", select);
  };

  const handleHelperSelect = (kind) => {
    setKind(kind);
  };
  return (
    <>
      <Switch>
        <Route path="/needy/step3" component={NeedyAuthSms} />
        <Route
          path="/needy/step2"
          render={(props) => (
            <NeedyInfo
              {...props}
              onChange={onChangeHandler}
              switchHandler={onSwitchHandler}
              changeSelect={onChangeSelect}
              needyName={needyName}
              needyLastname={needyLastname}
              needyBirthDate={needyBirthDate}
              needyZipCode={needyZipCode}
              needyPhonenumber={needyPhonenumber}
              needyAddress={needyAddress}
              needyNumberOfMembers={needyNumberOfMembers}
              selectedItem={select}
              checkState={switch1}
            />
          )}
        />
        <Route
          exact
          path="/needy/step1"
          render={(props) => (
            <WhatTheyNeed
              {...props}
              selectedItem={kind}
              onItemSelect={handleHelperSelect}
              onChange={onChangeHandler}
              textDesc={textDesc}
            />
          )}
        />
      </Switch>
    </>
  );
};
