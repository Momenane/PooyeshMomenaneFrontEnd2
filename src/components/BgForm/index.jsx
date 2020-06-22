import React from 'react'
import bg from '../../assets/form-bg.png'
import puzzle from '../../assets/mainpage-puzzle.svg'
import './index.css'

export default () => {

  return(
    <>
      <img src={bg} alt="background" className="bg-form"/>
       <img src={puzzle} alt="background" className="puzzle1" />
       <img src={puzzle} alt="background" className="puzzle2"/>
       <img src={puzzle} alt="background" className="puzzle3"/>
      <img src={puzzle} alt="background" className="puzzle4"/> 
    
    </>
  )
}