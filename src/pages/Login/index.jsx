import React ,{useState}from "react";
import { Link } from "react-router-dom";

import signBg from '../../assets/sign-login-bg.svg'
import LoginForm from "./LoginForm";

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



  return (
    <>
    <div className="row signContainer m-0 p-0" >
      <div className="col-md-6 col-12">
      <LoginForm
        loginZipCode={loginZipCode}
        loginPassword={loginPassword}
        onChange={onChangeHandler}
      />
      <Link to="/panel/poorslist"> ورود به پنل تست</Link>
      </div>
      <div className="col-md-6 p-0 d-none d-md-block">
        <img style={{height:'100%',display:'inline-block',float:"left"}} src={signBg} alt=""/>
      </div>
    </div>
  
  
    </>
  );
}

