import React from 'react'
import PropTypes from 'prop-types'
import BgForm from '../../../components/BgForm'
import Tape from '../../../components/Tape'


const BgNeedyForm = props => {
  return (
    <>
    <BgForm/>
    <img src={props.src} alt="" style={{width:props.widthImg,height:props.heightImg,position:'absolute',bottom:props.bottomImg,left:props.leftImg,zIndex:2}}/>
    <div style={{position:'absolute',left:'-150px',zIndex:1,bottom:150}}>
      <Tape name={props.Tape1}/>
      <Tape name={props.Tape2}/>
      <Tape/>   
    </div>
    </>
  )
}

BgNeedyForm.propTypes = {
  src:PropTypes.string.isRequired,
  Tape1:PropTypes.string.isRequired,
  Tape2:PropTypes.string.isRequired,
  bottomImg:PropTypes.string.isRequired,
  leftImg:PropTypes.string.isRequired,
  widthImg:PropTypes.string.isRequired,
  heightImg:PropTypes.string.isRequired

}

export default BgNeedyForm
