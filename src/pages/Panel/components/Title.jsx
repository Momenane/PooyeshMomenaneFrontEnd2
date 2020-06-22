import React from 'react'

const Title = (props) => {
  return (
    <div style={{marginTop:props.marginTop,position:'relative'}}>
      <hr style={{opacity:.3}}/>
  <h2 style={{position:'absolute',backgroundColor:props.backgroundColor,top:props.top,width:285,fontFamily:'IRANSans'}}>{props.title}</h2>
  </div>
  )
}

export default Title
