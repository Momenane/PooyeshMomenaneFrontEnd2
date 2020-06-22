import React, { useState } from "react";
import AsideBar from "../components/AsideBar";
import Navbar from "../components/Navbar";
import ReactEcharts from "echarts-for-react";
import { Link } from "react-router-dom";
import logo from "../../../assets/panel-teamLogo.png";
import Title from "../components/Title";
import "./index.css";

export default (props) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const persianNumber = (str) => {
    if (str !== null && str !== undefined) {
      if (typeof str === "number") {
        str = str.toString();
      }
      return str
        .replace(/0/g, "۰")
        .replace(/1/g, "۱")
        .replace(/2/g, "۲")
        .replace(/3/g, "۳")
        .replace(/4/g, "۴")
        .replace(/5/g, "۵")
        .replace(/6/g, "۶")
        .replace(/7/g, "۷")
        .replace(/8/g, "۸")
        .replace(/9/g, "۹");
    }
  };
  const formatNumber = (num) => num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
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
        <div className="panel-profileContainer ">
          <div style={{ position: "relative" }}>
            <div className="panel-profile">
              <div className="panel-profileColRight">
                <h3>گروه جهادی فاطمیون</h3>
                <p>نام سر تیم : علی غیبگو</p>
              </div>
              <div className="panel-profileColLeft">
                <div className="panel-profileContentContainer">
                  <span>شماره همراه سرتیم : </span>
                  <span>09123456789</span>
                </div>
                <div className="panel-profileContentContainer">
                  <span> شماره همراه اضطراری : </span>
                  <span>09123456789</span>
                </div>
                <div className="panel-profileContentContainer">
                  <span>آدرس ایمیل سرتیم : </span>
                  <span>example@makeen.com</span>
                </div>
              </div>
              <div className="panel-profileLogo">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <Link to="/panel/editProfile" className="btn btn-profileEditBtn ">
              ویرایش اطلاعات
            </Link>
            <span className="panel-profileShadow" />
          </div>
        </div>
        <div className="panel-profileBottomcontainer">
          <Title 
          title="کمک های شما " 
          marginTop={"50px"}
          backgroundColor={"#F5F5F5"}
          top={"-40px"}
          />

          <div className="row">
            <div className="col-md-6 col-lg-3 col-sm-12">
              <div className="panel-yourHelp">
                <h4 className="panel-h4Help">تعداد کمک های شما</h4>
                <div className="panel-allVolunteersHelp">
                  <h2>{formatNumber("8")}</h2>
                  <h4>عدد</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6  col-lg-3 col-sm-12">
              <div className="panel-yourHelp">
                <h4 className="panel-h4Help"> جمع مبالغ کمک شده </h4>
                <div className="panel-allVolunteersMoney">
                  <h2>{formatNumber("20500000")}</h2>
                  <h4>ریال</h4>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6  col-sm-12">
              <div className="panel-chartContainer">
                <h4>مبالغ جمع شده شش ماه اخیر</h4>
                <ReactEcharts
                  option={{
                    color: "#14abef",
                    legend: {},
                    tooltip: {
                      show: true,
                      formatter: function (e) {
                        return (
                          e.marker +
                          "  " +
                          e.name +
                          " " +
                          persianNumber(e.value + "  تومان  ")
                        );
                      },
                    },
                    xAxis: {
                      type: "category",
                      data: [
                        "فروردین",
                        "اردیبهشت",
                        "خرداد",
                        "تیر",
                        "مرداد",
                        "شهریور",
                        "مهر",
                      ],
                      axisTick: {
                        alignWithLabel: true,
                      },
                    },
                    yAxis: {
                      show: false,
                      type: "value",
                    },
                    series: [
                      {
                        type: "bar",
                        barWidth: "30%",
                        data: [10, 52, 200, 334, 390, 330, 220],
                      },
                    ],
                  }}
                  className="chart-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
