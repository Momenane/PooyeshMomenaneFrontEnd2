import React from 'react'
import './GradientBg.css'
const GradientBg = (props) => {
  return (
    <div className="coronaGradientBg"
     style={{ transform: `rotate(${props.rotate}deg)`,}}>
    </div>
  )
}

export default GradientBg
