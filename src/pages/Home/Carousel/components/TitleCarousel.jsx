import React from 'react'
import bgTitile from '../../../../assets/mainpage-shape-bg-title-crousel.svg'
import './TitleCarousel.css'
const TitleCarousel = (props) => {
  return (
    <div className="d-flex justify-content-center">
    <div className="titleCarouselContainer ">
      <img src={bgTitile} style={{width:'100%',height:'100%',marginTop:'1px'}} alt="bg-title-crousel"/>
      <h3  className="titleCarousel m-0">{props.name}</h3>
      <props.icon className="iconTitleCarousel"/>
    </div>
  </div>
  )
}

export default TitleCarousel
