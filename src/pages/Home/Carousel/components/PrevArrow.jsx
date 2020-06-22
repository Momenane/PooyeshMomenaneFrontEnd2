import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
    onClick={onClick}
  >
    <FaChevronLeft  alt="arrow_left" style={{
       position:'absolute', 
       top:'45%',
       right:'102%',
       cursor:'pointer',
       fontSize:30,
       color:'white'
       }}/>
  </div>
  )
}

export default PrevArrow
