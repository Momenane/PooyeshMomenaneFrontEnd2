import React from 'react'
import InputForm from '../../components/InputForm'
import { PrimaryButton } from '../../components/Button'
import { Link } from 'react-router-dom'


const LoginForm = (props) => {
  return (
    <form
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 80,
    }}
    >
    <h2 style={{fontFamily:"IRANSans",fontWeight:"bold",marginBottom:30,fontSize:'20px'}}>    ورود به حساب کاربری</h2>


    <div className="col-md-8 col-sm-12  m-0 p-1">
      <InputForm
        onChange={props.onChange}
        placeholder="کد ملی"
        name="loginZipCode"
        value={props.loginZipCode}
      />
    </div>
    <div className="col-md-8 col-sm-12  m-0 p-1">
      <InputForm
        onChange={props.onChange}
        placeholder=" رمز عبور"
        name="loginPassword"
        value={props.loginPassword}
        type={'password'}
      />
    </div>
    <div className="col-md-8 col-sm-12  m-0 p-0" >
      <div className="d-flex flex-column  justify-content-center mt-3 align-items-center">
        <PrimaryButton
          name=" ورود"
        />
      <Link to="/signup" style={{marginTop:10,fontSize:'12px',fontFamily:"IRANSans",color:'#1b1b1b'}}>  حساب کاربری خود را بسازید ؟  </Link>
      </div>
    </div>
    </form>
  )
}

export default LoginForm
