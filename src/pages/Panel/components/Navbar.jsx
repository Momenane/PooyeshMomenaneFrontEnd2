import React from "react";
import "./Navbar.css";
import { FaSearch, FaBars } from "react-icons/fa";
import GetDate from "./GetDate";

const Navbar = (props) => {
  return (
    <nav className="panel-nav">
      <ul className="panel-ul d-flex flex-column  flex-md-row justify-content-between align-items-center p-0  ">
        <li className="bar-icon" onClick={props.handleToggle}>
          <FaBars />
        </li>
        <li className="" style={{ listStyle: "none" }}>
          <div className="panel-search">
            <FaSearch className="panel-iconSearch" />
            <input
              placeholder="جستجو کنید"
              type="text"
              className="panel-inputSearch"
            />
          </div>
        </li>
        <li style={{ listStyle: "none", width:300 }}>
          <GetDate />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
