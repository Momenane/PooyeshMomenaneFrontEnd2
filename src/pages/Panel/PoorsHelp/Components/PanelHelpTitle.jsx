import React from 'react'

import './PanelHelpTitle.css'
const PanelHelpTitle = (props) => {
  return (
    <div className="title-helpPanel">
    <h3 className="panel-helpH3" >  {props.title}   </h3>
      <hr/>
  </div>
  )
}

export default PanelHelpTitle
