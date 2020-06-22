import React from 'react'
import PropTypes from 'prop-types'
import BgForm from '../../../components/BgForm'



const BgNeedyForm = props => {
  return (
    <>
    <BgForm/>
    <img src={props.src} alt="" style={{position:'absolute',bottom:'30%',left:110,zIndex:2}}/>
    <div style={{position:'absolute',left:'-150px',zIndex:1,bottom:150}}>
     <div style={{position:'absolute',bottom:'-50px',left:350,width:330,height:200}}>
       <h3 style={{fontSize:32,fontFamily:"IRANSans",textAlign:'center',color:'#004182',fontWeight:'bold'}}>{props.title}</h3>
       <p style={{fontSize:20,fontFamily:"IRANSans",textAlign:'center',color:'#004182',fontWeight:'bold'}}>{props.subTitle}</p>
      </div>

    </div>
    </>
  )
}

BgNeedyForm.propTypes = {
  src:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.string.isRequired,
}

export default BgNeedyForm
