import React ,{useState}from "react";
import logo from "../../../../assets/mainpage-logo.svg";
import { FaSearch } from "react-icons/fa";
import { mainBanner } from "../../../../data.json";
import { Link } from "react-router-dom";
import auth from '../../../../services/AuthService'

import "./MainBannerNav.css";

const MainBannerNav = () => {
  const [userToken] = useState(auth.getJwt())

  return (
    <nav>
      <ul className="row m-0 p-0 align-items-center">
        <li
          className="
        col-md-6 col-sm-12 
        mt-3 p-0 
        d-flex 
        align-items-center
        justify-content-center justify-content-md-start"
        >
          <img src={logo} alt="logo" />
          <h2 className="logoName ">{mainBanner.logoname}</h2>
        </li>
        <li
          className="col-md-6 col-sm-12 mt-3   justify-content-center d-flex flex-column flex-md-row "
          style={{ listStyle: "none" }}
        >
          <div className="mainBannerSearch">
            <FaSearch className="mainBannerIconSearche" />
            <input type="text" className="mainBannersearcheInput" />
          </div>
          {userToken?
           <>
            <Link className="mainBannerSignup" to="/panel/poorslist">
            پنل مدیریتی
            </Link>
            <button 
            style={{borderRadius:5,marginRight:10,color:'#004182'}}
             onClick={() => {
             auth.logout();
             window.location = "/";
            }}> 
            خروج
           </button>
          </>
         :
         <>
          <Link className="mainBannerSignup" to="/signup">
            ثبت نام
          </Link>
          <Link className="mainBannerlogin" to="/login">
           ورود
          </Link>
          </>

         }
        </li>
      </ul>
    </nav>
  );
};

export default MainBannerNav;
