import React from 'react'
import formImg1 from '../../../assets/form-img1.svg'
import BgNeedyForm from '../components/BgNeedyForm'
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
          <h2 className="needy-Title">ثبت نیازمندی</h2>
          <h4 className="needy-subTitle">نوع نیازتان را مشخص کنید</h4>
          <ListGroup
            items={btnlist}
            selectedItem={props.selectedItem}
            onItemSelect={props.onItemSelect}
          /> 
          <textarea 
           className="needy-textareaWhatNeed"
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
                to="/needy/step2"
              />
            </div>
        </div>
        <div className="col-md-7 p-0 m-0 d-md-block d-none" style={{position:'relative',overflow:'hidden'}} >
          <BgNeedyForm
            src={formImg1}
            Tape1="ما همراهتان هستيم و خواهيم بود"
            Tape2="تا حامی و یاری رسانتان باشیم"
            widthImg="350px"
            heightImg="257px"
            bottomImg="40px"
            leftImg="10%"
          />
        </div>
      </div>
    </>
  );
}
