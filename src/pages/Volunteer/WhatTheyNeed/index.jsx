import React,{useState} from 'react'
import vlimg from '../../../assets/volunteer-notCompleete.png'
import BgVolunteerForm from '../components/BgVolunteerForm'
import ListGroup from "../../../components/ListGroup";
import {LinkButton} from '../../../components/Button';

export default (props) => {

  const btnlist=[
    {
      id:1,
      name:'غذا',
      nameEng:'food'
    },
    {
      id:2,
      name:'اجاره',
      nameEng:'rent'
    },
    {
      id:3,
      name:'درمان',
      nameEng:'cloth'
    },
    {
      id:4,
      name:'جهزیه',
      nameEng:'Dowry',
      
    },
    {
      id:5,
      name:'اشتغال زایی',
      nameEng:'employment'
    },
    {
      id:6,
      name:'سایر',
      nameEng:'tuition',
    }
  ]


  return (
    <>
      <div className="row p-0 m-0" style={{height:'100vh'}}>
        <div className="col-md-5 col-sm-12 p-0 m-0" style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'cneter',
          justifyContent:"center"
        }}>
          <h2 className="volunteer-Title">ثبت نیازمندی</h2>
          <h4 className="volunteer-subTitle">نوع نیازتان را مشخص کنید</h4>
          <ListGroup
            items={btnlist}
            selectedItem={props.selectedItem}
            onItemSelect={props.onItemSelect}
          /> 
          <textarea 
           className="volunteer-textareaWhatNeed"
           value={props.textDesc} 
           onChange={props.onChange}
           name="textDesc"
           cols="60"
           placeholder="توضیحات اضافی"
           rows="10"
           />
            <div style={{width:300,marginRight:'auto',marginLeft:'auto'}}>
              <LinkButton 
                name="ثبت"
                to="/volunteer/step2"
              />
            </div>
        </div>
        <div className="col-md-7 p-0 m-0 d-md-block d-none" style={{position:'relative',overflow:'hidden'}} >
          <BgVolunteerForm
            src={vlimg}
            title="همدلی مومنانه"
            subTitle="هـرگروهـی نسبت به توان مالی و عملی خود
            به نوبه خود به نیازمندان کمک رسانی می کند ."
          />
        </div>
      </div>
    </>
  );
}
