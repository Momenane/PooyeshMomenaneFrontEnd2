import React from 'react'
import './SingleBottomCard.css'
const SingleBottomCard = (props) => {
  return (
    <>
      <div className="cardBottomDescription">
        <h4>اقلام اهدا شده </h4>
        <p>{props.detailhelp}</p>
      </div>
      <div className="cardBottomDate">
        <h4>در تاریخ  </h4>
        <p>{props.date}</p>
      </div>
      <div className="cardBottomVolunteersTeam">
        <h4>توسط </h4>
        <p>{props.teamName}</p>
      </div>
    </>
  )
}

export default SingleBottomCard
