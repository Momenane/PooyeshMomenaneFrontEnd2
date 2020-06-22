import React ,{useState}from "react";
import { Route, Switch } from "react-router-dom";
import WhatTheyNeed from "./WhatTheyNeed";
import VolunteerInfo from "./VolunteerInfo";
import VolunteerAuthSMS from "./VolunteerAuthSMS";
import './index.css'




export default (props) => {
  
  const [groupName, setGroupName] = useState("")
  const [leaderName, setLeaderName] = useState("")
  const [leaderLastName, setLeaderLastName] = useState("")
  const [leaderPhonenumber, setLeaderPhonenumber] = useState("")
  const [urgentNumber, setUrgentNumber] = useState("")
  const [volunteerAddress, setVolunteerAddress] = useState("")
  const [textDesc, setTextDesc] = useState("");
  const [kind, setKind] = useState( {
    id:1,
    name:'غذا',
    nameEng:'food'
  });
      
  const onChangeHandler = event => {
    const { name, value} = event.target;
    if(name==='groupName'){
      setGroupName(value)
    }else if(name==='leaderName'){
      setLeaderName(value)
    }else if(name==='leaderLastName'){
      setLeaderLastName(value)
    }else if(name==='leaderPhonenumber'){
      setLeaderPhonenumber(value)
    }else if(name==='urgentNumber'){
      setUrgentNumber(value)
    }else if(name==='textDesc'){
      setTextDesc(value)
    }else {
      setVolunteerAddress(value)
    }
  };


  const handleHelperSelect= kind =>{
    setKind(kind)
  }

  return (
    <>
      <Switch>
        <Route path="/volunteer/step3" component={VolunteerAuthSMS} />
        <Route  path="/volunteer/step2" render={(props) => 
          <VolunteerInfo 
            {...props} 
            groupName={groupName}
            leaderName={leaderName}
            leaderLastName={leaderLastName}
            leaderPhonenumber={leaderPhonenumber}
            urgentNumber={urgentNumber}
            volunteerAddress={volunteerAddress}
            onChange={onChangeHandler}
          />
         }/>
        <Route exact  path="/volunteer/step1" render={(props)=>
          <WhatTheyNeed
            {...props} 
            selectedItem={kind}
            onItemSelect={handleHelperSelect}
            onChange={onChangeHandler}
            textDesc={textDesc}
          />
          }/>
      </Switch>
    </>
  );
}

