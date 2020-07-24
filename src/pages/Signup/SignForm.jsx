import React from 'react'
import InputForm from '../../components/InputForm'
import { PrimaryButton } from '../../components/Button'
import { Link } from 'react-router-dom'


const SignForm = (props) => {
  return (
    <form
    onSubmit={props.onSubmit}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 80,
    }}
    >
    <h2 style={{fontFamily:"IRANSans",fontWeight:"bold",marginBottom:30,fontSize:'20px'}}>  ایجاد حساب کار بری</h2>
    <div className="col-md-8 col-sm-12  m-0 p-1">
      <InputForm
        onChange={props.onChange}
        placeholder="نام کاربری"
        name="signUserName"
        value={props.signUserName}

      />
    </div>
    <div className="col-md-8 col-sm-12 m-0 p-1">
      <div className="d-flex justify-content-between ">
        <div className="col-6 p-1">
          <InputForm 
            onChange={props.onChange}
            placeholder="نام"
            name="signName"
            value={props.signName} 
          />
        </div>
        <div className="col-6 p-1">
          <InputForm
            onChange={props.onChange}
            placeholder="نام خانوادگی"
            name="signLastname"
            value={props.signLastname}
          />
        </div>
      </div>
    </div>
    <div className="col-md-8 col-sm-12 m-0 p-1">
      <div className="d-flex justify-content-between ">
        <div className="col-6 p-1">
          <InputForm
            onChange={props.onChange}
            placeholder="کد ملی"
            name="signZipCode"
            value={props.signZipCode}
          />
        </div>
        <div className="col-6 p-1">
          <InputForm 
            onChange={props.onChange} 
            placeholder="شماره همراه"
            name="signPhoneNumber"
            value={props.signPhoneNumber}
          />
        </div>
      </div>
    </div>

    <div className="col-md-8 col-sm-12  m-0 p-1">
      <InputForm
        onChange={props.onChange}
        placeholder="آدرس ایمیل"
        name="signEmail"
        value={props.signEmail}
        type={'email'}
      />
    </div>
    <div className="col-md-8 col-sm-12  m-0 p-1">
      <InputForm
        onChange={props.onChange}
        placeholder=" رمز عبور"
        name="signPassword"
        value={props.signPassword}
        type={'password'}
      />
    </div>
    <div className="col-md-8 col-sm-12  m-0 p-1">
      <InputForm
        onChange={props.onChange}
        placeholder=" تکرار رمز عبور"
        name="signRePassword"
        value={props.signRePassword}
        type={'password'}
      />
      {/* <input type="password"/> */}
    </div>
    <div className="col-md-8 col-sm-12  m-0 p-0" >
      <div className="d-flex flex-column  justify-content-center mt-3 align-items-center">
        <PrimaryButton
          name="ایجاد حساب کار بری"
        />
      <Link to="/login" style={{marginTop:10,fontSize:'12px',fontFamily:"IRANSans",color:'#1b1b1b'}}>  حساب کاربری دارید ؟  </Link>
      </div>
    </div>
    </form>
  )
}

export default SignForm
