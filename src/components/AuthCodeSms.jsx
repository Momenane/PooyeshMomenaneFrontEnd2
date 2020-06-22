import React,{useState} from 'react'
import { PrimaryButton,AgreeButton } from './Button'
import './AuthCodeSms.css'
const AuthCodeSms = (props) => {

const [time,setTime]=useState(2)

  const checkButton=()=>{
    if(props.value.length>=5){
      return <div className="authSMSCode-btnContainer"> 
      <AgreeButton name="تایید"  onClick={()=>console.log('تایید')}/>
    </div>
   }
  
   setTimeout(() => {
      if(time>0){
        setTime(()=>{
          return time - 1
        })
      }else{
        return null
      }
    }, 1000);

    
    if(time>0){
      return(
      <>
        <span className="authSMSCode-btnDesc">پیامک جدیدي حاوي کد به شماره تان ارسال شد</span>
        <div className="authSMSCode-btnContainer"> 
          <PrimaryButton name={time}   onClick={()=>console.log('disabled')} disabled={true} />
        </div>
      </>
    )
    }else{
     return   ( 
       <>
        <span className="authSMSCode-btnDesc" >اگر مشکلی در رسیدن پیام رخ داده دوباره تلاش کنید</span>
        <div className="authSMSCode-btnContainer"> 
          <PrimaryButton name="ارسال مجدد"  onClick={()=>setTime(3)} disabled={false}/>
        </div>
    </>)
    }
  }

  const changeNumber=(str)=>{
    return str.replace(/(\d{4})\d{3}/,"$1*******")
  }

  return (
    <>
       <h2 className="needy-Title">ثبت کد تایید</h2>
       <p className="authCode" >کد  ۵رقمی ارسال شده به شماره تلفن</p>
       <p className="authCode" >
         (SMS: 
         <span style={{color:"#004182"}}>   {changeNumber('09117214021')}  </span> 
         )
          وارد نمایید
       </p>
         <input
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
            type="text"
            maxLength={5}
            style={{
              border:'1px solid #004182',
              width: 250,
              height: 50,
              borderRadius: "6px",
              marginRight: "auto",
              marginLeft: "auto",
              direction: "ltr",
              fontSize: 18,
              textAlign: "center",
              marginBottom: 150,
            }}
          />

          {checkButton()}
    </>
  )
}

export default AuthCodeSms
