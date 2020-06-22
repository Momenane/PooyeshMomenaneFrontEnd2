import React ,{useState}from "react";

import AsideBar from "../components/AsideBar";
import Navbar from "../components/Navbar";
import { FaChevronLeft } from "react-icons/fa";
import TopCard from "./components/TopCard";
import Title from "../components/Title";
import SingleBottomCard from "./components/SingleBottomCard";
import './index.css'
import { Link } from "react-router-dom";

const data1={
  birthDate:'1354/02/12',
  familynumber:'5',
  zipCode:'213129412',
  description:'همسرشان ده سال است که فوت شده و دارای دو فرزند معلول میباشد و در خانه اجاره ای زندگی میکند',
  houseHolderName:'اصغر بحران زاده',
  houseHolderPostion:"سرپرست خانوار",
}

const data2=[
  {
   _id:'1',
  teamName:"گروه جهادی احرار",
  date:"1398/11/23",
  helpDetail:" یک کیلو گوشت یک کیسه برنج ده کیلوگرمی " 
  },
  {
     _id:'2',
    teamName:"گروه جهادی احرار",
    date:"1398/11/23",
    helpDetail:" یک کیلو گوشت یک کیسه برنج ده کیلوگرمی " 
  },
  {
     _id:'3',
    teamName:"گروه جهادی احرار",
    date:"1398/11/23",
    helpDetail:" یک کیلو گوشت یک کیسه برنج ده کیلوگرمی " 
  },
  {
     _id:'4',
    teamName:"گروه جهادی احرار",
    date:"1398/11/23",
    helpDetail:" یک کیلو گوشت یک کیسه برنج ده کیلوگرمی " 
  },
  {
     _id:'5',
    teamName:"گروه جهادی احرار",
    date:"1398/11/23",
    helpDetail:" یک کیلو گوشت یک کیسه برنج ده کیلوگرمی " 
  },
  
]


export default (props) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle=()=>{
      setToggle(!toggle);
    }

  return (
    <div 
    className="d-flex"
    style={{backgroundColor:'#F5F5F5', height:'100vh', }}>
      <AsideBar  toggle={toggle} name="poorsList"/>
      <div className={toggle?'panel-container active p-0' :'panel-container p-0'}>
       <Navbar handleToggle={handleToggle} />
       <div className="panelDetail-container">
        <Title
         title="اطلاعات بیشتر درباره نیازمند"
         marginTop={"50px"}
         backgroundColor={"#F5F5F5"}
         top={"-40px"}
         />
        <TopCard
         data={data1}
        />
        <div className="panelDetail-bottomCardContainer">
          <div className="panelDetail-bottomCard">
            <div className="panelDetail-bottom-colRight">
              {data2.map(item=>(
                <div className="cardBottomContainer"  key={item._id}>
                  <SingleBottomCard
                    detailhelp={item.helpDetail}
                    date={item.date}
                    teamName={item.teamName}
                  />
                </div>
              ))}
            </div>
            <div className="panelDetail-bottom-colLeft">
                <FaChevronLeft onClick={()=>{
                  console.log('click')
                }}
                  style={{cursor:'pointer'}}
                />
            </div>
          </div>
          <hr style={{width:'95%',marginRight:'auto',marginTop:'auto',opacity:'.1'}}/>
          <div style={{width:300, margin:15}}>
              <Link to="/?" className="btn btn-iWantHelp">   
                میخواهم کمک کنم
              </Link>
            </div>

        </div>
       </div>
      </div>
   </div>

  );
}

