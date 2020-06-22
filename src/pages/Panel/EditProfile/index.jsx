import React, { useState, useEffect } from "react";
import AsideBar from "../components/AsideBar";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import camera from '../../../assets/upload-img-camera.svg'
import "./index.css";
import ListGroupPanel from "../components/ListGroupPanel";

export default (props) => {
  const [imageLogo, setImageLogo] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [kind, setKind] = useState({
    id:1,
    name:'غذا',
    nameEng:'food'
  });
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderPhoneNumber, setLeaderPhoneNumber] = useState("");
  const [ emergencyNumber, setEmergencyNumber] = useState("");
  const [descAboutTeam, setDescAboutTeam] = useState("");
  const [descAboutHelp, setDescAboutHelp] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "teamName") {
      setTeamName(value);
    } else if (name === "leaderName") {
      setLeaderName(value);
    } else if (name === "leaderPhoneNumber") {
      setLeaderPhoneNumber(value);
    } else if (name === "emergencyNumber") {
      setEmergencyNumber(value);
    } else if (name === "descAboutTeam") {
      setDescAboutTeam(value);
   } else {
    setDescAboutHelp(value);
    }
  };

  useEffect(() => {
   setKind({
    id:1,
    name:'غذا',
    nameEng:'food'
  })
  }, [] )


  const handleToggle = () => {
    setToggle(!toggle);
  };

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

  const handleHelperSelect = (kind) => {
    setKind(kind);
  };
  const onUploadImg = (event) => {
    if (!event.target.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)){
      alert(' باید عکس آپلود کنید ');
      return false;
    }

    if (event.target.files[0].size >=500000){
      alert ('عکس باید کمتر از 500 کیلوبایت باشد')
      return false;
    }
    
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImageLogo(e.target.result )
      };
      reader.readAsDataURL(event.target.files[0]);
    }
 
  };

  return (
    <div
      className="d-flex"
      style={{ backgroundColor: "#F5F5F5", height: "100vh" }}
    >
      <AsideBar toggle={toggle} name="profile" />
      <div
        className={
          toggle ? "panel-container active p-0" : "panel-container p-0"
        }
      >
        <Navbar handleToggle={handleToggle} />
        <div style={{ width: "95%", marginRight: "auto", marginLeft: "auto" }}>
          <Title 
           title="حساب کاربری" 
           marginTop={"50px"}
           backgroundColor={"#F5F5F5"}
           top={"-40px"}
         />
        </div>
        <div className="panel-editProfileContainer">
          <div className="panel-editProfile">
            <div className="panel-editUploadImg">
              {imageLogo ? (
                <>
                <label htmlFor="editProfile-logo"  className="editProfile-label">
                  <img
                    id="target"
                    src={imageLogo}
                    className="editProfile-imgLogo"
                    alt="عکس انتخابی شما"
                  />
                  <button
                      className="editProfile-delBtn"
                    onClick={() => {
                      setImageLogo(null)
                    }}
                  >
                    حذف
                  </button>
                  </label>
                </>
              ) : (
                <div className="upload-editProfile-logo ">
                  <input type="file" id="editProfile-logo"  onChange={onUploadImg}/>
                  <label htmlFor="editProfile-logo" className="editProfile-label">
                    <img src={camera} alt="camera" className="camera"/>
                    <p style={{position:'absolute',top:50,right:40,fontFamily:"IRANSans"}}>آپلود عکس</p>
                  </label>
              </div>
              )}
            </div>
            <div className="panel-editprofTeamNameContainer">
              <label htmlFor="teamName">نام گروه جهادی  : </label>
              <input
               value={teamName}
                type="text"
                 id="teamName" 
                 name="teamName" 
                 className="panel-editProfileInput"
                  onChange={onChangeHandler}
                 />
            </div>
            <button className="btn btn-editProfileAcc">ثبت اطلاعات</button>
            <div className="panel-editProfileBottom">
              <div>
                <h3 style={{position:'absolute',top:'-5px',padding:'0px 0px 0px 15px' ,margin:0, backgroundColor:'white',fontFamily:'IRANSans'}}>اطلاعات مربوط به سرتیم گروه جهادی</h3>
                <hr />
              </div>
              <div className="row mt-5">
                <div className="col-md-7 col-sm-12">
                <div className="panel-inputContainer">
                  <label htmlFor="leaderName">نام سر تیم : </label>
                  <input 
                  value={leaderName}
                   className="panel-input"
                    type="text"
                    name ="leaderName"
                    id="leaderName"
                    placeholder=" شاه عباس"
                    onChange={onChangeHandler}
                    />
                </div>

                <div className="panel-inputContainer">
                  <label htmlFor="leaderPhoneNumber">شماره همراه سرتیم: </label>
                  <input 
                   value={leaderPhoneNumber}
                   className="panel-input"
                    type="text"
                    name ="leaderPhoneNumber"
                    id="leaderPhoneNumber"
                    placeholder=" 09123456789"
                    onChange={onChangeHandler}
                    />
                </div>
                <div className="panel-inputContainer">
                  <label htmlFor="emergencyNumber">شماره اضطراری سرتیم: </label>
                  <input 
                   value={emergencyNumber}
                   className="panel-input"
                    type="text"
                    name ="emergencyNumber"
                    id="emergencyNumber"
                    placeholder=" 09123456789"
                    onChange={onChangeHandler}
                    />
                </div>
                <div className="panel-inputContainer">
                  <label htmlFor="descAboutTeam">  آدرس: </label>
                    <textarea 
                    className="panel-textAreaAboutTeam"
                    value={descAboutTeam} 
                    onChange={onChangeHandler}
                    name="descAboutTeam"
                    cols="60"
                    placeholder=" آدرس"
                    rows="5"
                    />
                </div>
                </div>
                <div className="col-md-5 col-sm-12">
                <ListGroupPanel
                    items={btnlist}
                    selectedItem={kind}
                    onItemSelect={handleHelperSelect}
                  /> 
                  <textarea 
                  className="panel-textareaWhatNeed"
                  value={descAboutHelp} 
                  onChange={onChangeHandler}
                  name="descAboutHelp"
                  cols="60"
                  placeholder="توضیحات "
                  rows="5"
                  />

                </div>
                 </div>
              </div>
            
          </div>
          
         <div className="panel-editProfileShadow"/>
        </div>

      </div>
    </div>
  );
};
