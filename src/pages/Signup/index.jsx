import React ,{useState}from "react";
import './index.css'
import SignForm from "./SignForm";
import signBg from '../../assets/sign-login-bg.svg'




export default (props) => {
  const [signName, setSignName] = useState("")
  const [signLastname, setSignLastname] = useState("")
  const [signZipCode,setSignZipCode] = useState("")
  const [signPhoneNumber, setSignPhoneNumber] = useState("")
  const [signEmail, setSignEmail] = useState("")
  const [signPassword, setSignPassword] = useState("")
  const [signRePassword, setSignRePassword] = useState("")
  
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "signName") {
      setSignName(value);
    } else if (name === "signLastname") {
      setSignLastname(value);
    } else if (name === "signZipCode") {
      setSignZipCode(value);
    } else if (name === "signPhoneNumber") {
      setSignPhoneNumber(value);
    } else if (name === "signEmail") {
      setSignEmail(value);
    } else if (name === "signPassword") {
      setSignPassword(value);
    }else {
      setSignRePassword(value);
    }
  };

  return (
    <>
    <div className="row signContainer m-0 p-0" >
      <div className="col-md-6 col-12">
      <SignForm
      signName={signName}
      signLastname={signLastname}
      signZipCode={signZipCode}
      signPhoneNumber={signPhoneNumber}
      signEmail={signEmail}
      signPassword={signPassword}
      signRePassword={signRePassword}
      onChange={onChangeHandler}
      />
      </div>
      <div className="col-md-6 p-0 d-none d-md-block">
        <img style={{height:'100%',display:'inline-block',float:"left"}} src={signBg} alt=""/>
      </div>
    </div>
  
  
    </>
  );
}

