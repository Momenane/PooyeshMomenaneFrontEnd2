import React from 'react'
import { FaChevronRight } from "react-icons/fa";
const NextArrow = (props) => {
  const { onClick ,style} = props;
  return (
    <div
    onClick={onClick}
  >
    <FaChevronRight  alt="arrow_left" style={{
       position:'absolute', 
       top:'45%',
       left:'101%',
       cursor:'pointer',
       fontSize:30,
       color:'white',
       }}/>
  </div>
  )
}

export default NextArrow
