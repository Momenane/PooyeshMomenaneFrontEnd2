import React from 'react'
import group from '../../../../assets/mainpage-group.svg'
import {FaUsers,FaUser } from "react-icons/fa";
import {LinkButton} from '../../../../components/Button';
import {mainBanner} from '../../../../data.json'
import './MainBannerContent.css'
const MainBannerContent = () => {
  return (
    <div className="row m-0 p-0" style={{flexDirection:'row-reverse'}}>
    <div className="col-md-6 col-sm-12 m-0 p-0 d-none d-md-block"  >
      <img src={group} alt="bg-pepole" className="imgPepole"/>
    </div>
    <div className="col-md-6 col-sm-12 ">
    <h1 className="mainbannerH1">{mainBanner.h1Tag} </h1>
    <h4 className="mainbannerH4">{mainBanner.h4Subtitle}</h4>
      <div className="mt-5 mr-2">
        <LinkButton
          name={mainBanner.volunteersBtn}
          icon={FaUsers}
          to="/volunteer/step1"
        />
        <LinkButton
          name={mainBanner.needyBtn}
          icon={FaUser}
          to="/needy/step1"
        />
      </div>
    </div>
  </div>
  )
}

export default MainBannerContent
