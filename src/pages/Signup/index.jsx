import React ,{useState}from "react";
import SignForm from "./SignForm";
import uRegister from '../../services/UserServiceRegister'
import signBg from '../../assets/sign-login-bg.svg'
import './index.css'




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

  const doSubmit = async () => {
    const bodyData= {
      username: signName,
      firstName: signName,
      lastName: signLastname,
      password: signPassword,
      role: "GAdmin",
      email: signEmail,
    }
    
  if(signPassword.trim() ===signRePassword.trim()){
    try {
      console.log('bodyData',bodyData);
      await uRegister.register(bodyData);

      const { state } = props.location;
      window.location = state ? state.from.pathname : "/panel/poorslist";
    } catch (ex) {
      console.log(ex.response);
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response);
        // toast.error("excepted error error 400");
      }
    }
  }else{
    console.log('password and repassword not correct')
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
      <SignForm
      onSubmit={handleSubmit}
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

