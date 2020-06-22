import React ,{useState, useEffect}from "react";
import AsideBar from "../components/AsideBar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Checkbox from './Components/Checkbox';
import PanelHelpTitle from './Components/PanelHelpTitle'
import './index.css'
import CountChoosPoorpepole from "./Components/CountChoosPoorpepole";

//اگه جز مناطق تهران نیست 1 باید باشه
const data=[
  {
    _id:1,
    row:'1',
    name:'احمد',
    lastName:'صمدی',
    houseHolder:true,
    birthDate:'1333/02/03',
    zipcode:"0123456789",
    numberFamily:'2',
    helper:'بسته معیشتی',
  }, {
    _id:2,
    row:'2',
    name:'محمود',
    lastName:'محمودی',
    houseHolder:true,
    birthDate:'1333/02/03',
    zipcode:"12312312",
    numberFamily:'3',
    helper:'بسته معیشتی',
  },
  {
    _id:3,
    row:'3',
    name:'صالح',
    lastName:'صالحی',
    houseHolder:false,
    birthDate:'1333/02/03',
    zipcode:"234234235",
    numberFamily:'5',
    helper:'بسته معیشتی',
  },
  {
    _id:4,
    row:'4',
    name:'صالح',
    lastName:'صالحی',
    houseHolder:false,
    birthDate:'1333/02/03',
    zipcode:"234234235",
    numberFamily:'4',
    helper:'بسته معیشتی'
  },
  {
    _id:5,
    row:'5',
    name:'محمد',
    lastName:'محمدی',
    houseHolder:true,
    birthDate:'1333/02/03',
    zipcode:"1231241",
    numberFamily:'3',
    helper:'بسته معیشتی'
  }, {
    _id:6,
    row:'6',
    name:'شاپور',
    lastName:'بختیار',
    houseHolder:true,
    birthDate:'1333/02/03',
    zipcode:"12312312312",
    numberFamily:'7',
    helper:'بسته معیشتی'
  },
  {
    _id:7,
    row:'7',
    name:'همنشین',
    lastName:'بشین',
    houseHolder:false,
    birthDate:'1333/02/03',
    zipcode:"2131444144",
    numberFamily:'6',
    helper:'بسته معیشتی'
  },
  {
    _id:8,
    row:'8',
    name:'هخامنش',
    lastName:'تهرانی',
    houseHolder:false,
    birthDate:'1333/02/03',
    zipcode:"1231222344",
    numberFamily:'5',
    helper:'بسته معیشتی'
  },
  {
    _id:9,
    row:'9',
    name:'محمد',
    lastName:'محمدی',
    houseHolder:true,
    birthDate:'1333/02/03',
    zipcode:"1231241",
    numberFamily:'3',
    helper:'بسته معیشتی'
  }, {
    _id:10,
    row:'10',
    name:'شاپور',
    lastName:'بختیار',
    houseHolder:true,
    birthDate:'1333/02/03',
    zipcode:"12312312312",
    numberFamily:'2',
    helper:'بسته معیشتی'
  }

]


export default (props) => {
    const [toggle, setToggle] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});
    const handleChange = event => {
      setCheckedItems({
        ...checkedItems,
        [event.target.name]: event.target.checked
      });
    };

    useEffect(() => {
      console.log("checkedItems: ", checkedItems);
    }, [checkedItems])
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
       <div className="table-panelHelpresponsive  ">
        <PanelHelpTitle
          title=" کمک به نیازمندان  "
        />
        <div style={{float:'left',marginLeft:'20px'}}>
        <div style={{width:360,display:'flex',justifyContent:'end',marginBottom:'20px'}}>
            <CountChoosPoorpepole
              items={checkedItems}
            />
          <Link className="btn-panelHelpContinue" to="/">  ادامه </Link>
        </div>
        </div>
         <table className="panel-helpTable ">
             <thead  className="panel-helpThead">
                <tr>
                 <th></th>
                 <th>ردیف</th>
                 <th>نام</th>
                 <th>نام خانوادگی</th>
                 <th>سرپرست خانوار</th>
                 <th>تعداد اعضا </th>
                 <th> کد ملی</th>
                 <th>تاریخ تولد</th>
                 <th>نوع کمک</th>
                 <th></th>
                </tr>
              </thead>
             <tbody>
              {data.map((item) => (
                <tr key={item.productCode}>
                  <td>
                  <Checkbox 
                  name={item._id} 
                  checked={checkedItems[item._id]} 
                  onChange={handleChange}
                   />
                  </td>
                  <td>{item.row}</td>
                  <td>
                   {item.name}
                  </td>
                  <td>
                   {item.lastName}
                  </td>
                  <td >
                    {item.houseHolder===true?
                      <span className="panel-houseHoldert">هست</span>:
                      <span className="panel-houseHolderf">نیست</span>
                    }
                    </td>
                  <td >
                   {item.numberFamily}
                  </td>
                  <td>
                    {item.zipcode}
                  </td>
                  <td >
                   {item.birthDate}
                  </td>
                  <td>
                    {item.helper}
                  </td>
                  <td className="">
                    <Link className="panel-link" to={`/panel/poordetail/${item._id}`}>
                      نمایش اطلاعات بیشتر
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> 
          <button  className="btn "style={{textDecoration:'underline',cursor:'pointer',marginRight:60,color:'#0088C4',backgroundColor:'transparent'}}>موارد بیشتر </button>
          </div>
        </div>
      </div>

  );
}

