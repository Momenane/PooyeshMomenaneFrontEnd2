import React from 'react'
import './index.css'

export default (props) => {

  return(
   <div className="tapeForm" >
        {props.name?<p className="p-tape">{props.name}</p>:null}  
    </div> )
}