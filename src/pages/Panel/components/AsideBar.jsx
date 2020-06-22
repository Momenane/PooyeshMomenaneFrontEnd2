import React from "react";
import "./AsideBar.css";
import { Link } from "react-router-dom";
import { FaHandHoldingHeart, FaComments ,FaUserAlt} from 'react-icons/fa';

const AsideBar = (props) => {
  return(
    <aside className={props.toggle?"panel-aside active":"panel-aside"}>
      <h1 className="panel-title">پویش مومنانه</h1>
      <ul className="panel-listContainer">
        <li 
         className={props.name==="poorsList"?'panel-item active':'panel-item'}
        >
          <FaHandHoldingHeart
           className={props.name==="poorsList"?'panel-iconActive':''}
            style={{marginLeft:5,marginRight:5,fontSize:20}} />
          <Link  
          className={props.name==="poorsList"?'panel-itemLinkActive':'panel-itemLink'}
          to="/panel/poorslist"
          > لیست نیازمندان</Link>
        </li>
        <li 
         className={props.name==="contactAdmin"?'panel-item active':'panel-item'}
        >
          <FaComments 
           className={props.name==="contactAdmin"?'panel-iconActive':''}
           style={{marginLeft:5,marginRight:5,fontSize:18}}
           />
          <Link 
          className={props.name==="contactAdmin"?'panel-itemLinkActive':'panel-itemLink'} 
          to="/panel/contactAdmin"
          >ارتباط با ادمین</Link>
        </li>
        <li 
         className={props.name==="profile"?'panel-item active':'panel-item'}
        style={{borderBottom:0}}>
         <FaUserAlt 
          className={props.name==="profile"?'panel-iconActive':''}
         style={{marginLeft:5,marginRight:5}} />
          <Link 
          className={props.name==="profile"?'panel-itemLinkActive':'panel-itemLink'} 
          to="/panel/profile">پروفایل</Link>
        </li>
      </ul>
    </aside>
  );
};

export default AsideBar;
