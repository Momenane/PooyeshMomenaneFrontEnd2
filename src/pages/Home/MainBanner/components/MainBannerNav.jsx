import React from "react";
import logo from "../../../../assets/mainpage-logo.svg";
import { FaSearch } from "react-icons/fa";
import { mainBanner } from "../../../../data.json";
import "./MainBannerNav.css";
import { Link } from "react-router-dom";
const MainBannerNav = () => {
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
          className="col-md-6 col-sm-12 mt-3   justify-content-center d-flex"
          style={{ listStyle: "none" }}
        >
          <div className="mainBannerSearch">
            <FaSearch className="mainBannerIconSearche" />
            <input type="text" className="mainBannersearcheInput" />
          </div>
          <Link className="mainBannerSignup" to="/signup">
            ثبت نام
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainBannerNav;
