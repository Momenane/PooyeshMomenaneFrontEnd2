import React from 'react'
import PropTypes from "prop-types";
import './CardCarousel.css'


const CardCarousel = (props) => {
  return (
    <div className="figureContainerCarousel" >
    <figure className="figureCarousel">
      <img src={props.src} alt={props.alt} className="figureImgCarousel"/>
      <figcaption className="figcaptionCarousel">
       {props.title}
      </figcaption>
      <p className="figureTextCarousel">
       {props.desc}
      </p>
    </figure>
    </div>
  )
}

CardCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
export default CardCarousel




