import React from 'react'


import CoronaCard from "./components/CoronaCard";
import bg from '../../../assets/mainpage-bg.png'
import puzzle from '../../../assets/mainpage-puzzle.svg'
import './index.css'
import MainBannerNav from './components/MainBannerNav';
import MainBannerContent from './components/MainBannerContent';
export default (props) => {
  

  console.log(props);
  return (
   
      <header className="headerMainbanner">
        <img src={bg} alt={'bg'}  className="mainBanner-bg"/>
        <img src={puzzle} alt="puzzle" className="puzzle01"/>
        <img src={puzzle} alt="puzzle" className="puzzle02"/>
        <img src={puzzle} alt="puzzle" className="puzzle03"/>
        <img src={puzzle} alt="puzzle" className="puzzle04"/>
        <div className="container">
          <MainBannerNav/>
          <MainBannerContent/>
          <CoronaCard/>
        </div>
      </header>
  
  )
}
