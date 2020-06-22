import React from 'react'
import avatar from '../../../../assets/avatar-panel.svg'
import './TopCard.css'
const TopCard = (props) => {
  return (
    <div className="panelDetail-topCardContainer">
    <div className="panelDetail-topTitleContainer">
      <img src={avatar} alt="avatar"/>
       <h3>{props.data.houseHolderName}</h3>
       <h5>{props.data.houseHolderPostion}</h5>
    </div>
    <div className="panelDetail-topContentContainer">
        <div className="panelDetail-topContentParagraph">
          <p>
          تاریخ تولد : {props.data.birthDate}
          </p>
          <p>
          کد ملی : {props.data.zipCode}
          </p>
          <p>
           تعداد اعضای خانوار: {props.data.familynumber} 
          </p>
        </div>
  <p style={{fontFamily:"IRANSans",paddingRight:30}}>{props.data.description}</p>
    </div>
  </div>
  )
}

export default TopCard
