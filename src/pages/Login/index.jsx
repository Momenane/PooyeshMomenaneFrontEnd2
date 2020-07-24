import React ,{useState}from "react";
import { Link } from "react-router-dom";

import signBg from '../../assets/sign-login-bg.svg'
import LoginForm from "./LoginForm";
import auth from '../../services/AuthService'

import './index.css'




export default (props) => {
  const [loginZipCode,setLoginZipCode] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
 
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "loginZipCode") {
      setLoginZipCode(value);
    } else {
      setLoginPassword(value)
    }
  };


  const doSubmit = async () => {

    const bodyData= {
      username: loginZipCode,
      password: loginPassword,
    }

    try {
      await auth.login(bodyData)
     
      const { state } = props.location;
      window.location = state ? state.from.pathname : "/panel/poorslist";
    } catch (ex) {
      console.log('login',ex.response);
      if (ex.response && ex.response.status === 400) {
        console.log('excepted error error 400',ex.response);
        // toast.error("excepted error error 400");
      }
    }
  };

const handleSubmit = (e) => {
    e.preventDefault();
   doSubmit();
  };


  return (
    <>
    <div className="row signContainer m-0 p-0" >
      <div className="col-md-6 col-12">
      <LoginForm
        loginZipCode={loginZipCode}
        loginPassword={loginPassword}
        onChange={onChangeHandler}
        onSubmit={handleSubmit}
      />
      </div>
      <div className="col-md-6 p-0 d-none d-md-block">
        <img style={{height:'100%',display:'inline-block',float:"left"}} src={signBg} alt=""/>
      </div>
    </div>
  
  
    </>
  );
}

