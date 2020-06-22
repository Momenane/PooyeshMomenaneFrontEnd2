import React from 'react';
import bgHelper from '../../../../assets/mainpage-corona.png'
import {mainBanner} from '../../../../data.json'
import GradientBg from './GradientBg';
import './CoronaCard.css';
import { Link } from 'react-router-dom';

const CoronaCard = () => {
  return (
    <div className="row cardContainer" >
      <div className="col-9 p-0">
        <div className='dash-card'/>
          <h2 className="coronaTitle-card">{mainBanner.h2Corona}</h2>
          <p className="coronaDesc-card" >{mainBanner.pCorona}</p>
      </div>
      <div className="col-3 p-0">
        <img src={bgHelper} className="coronaVolunteerBg"  alt='bgHelper' />
      </div>
      <Link className="btn btn-outline" to="/"> 
        بیشتر بدانید
     </Link>
       <div className="d-md-flex d-none " style={{position:'absolute',top:'-15px',left:250 ,width:300}}>
        <GradientBg rotate={-225}/>
        <GradientBg rotate={-225}/>
        <GradientBg rotate={-225}/>
      </div>
      <div className="d-md-flex d-none  " style={{position:'absolute',bottom:'-15px',right:35,width:300}}>
        <GradientBg rotate={-45}/>
        <GradientBg rotate={-45}/>
        <GradientBg rotate={-45}/>
      </div> 
    </div>
  )
}

export default CoronaCard
