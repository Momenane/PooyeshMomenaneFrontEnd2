import React from 'react'


const CountChoosPoorpepole = props => {
  return (
    <p style={{width:'150px',fontFamily:'IRANSans'}}>انتخاب <span style={{color:'#770022'}}>  {
       Object.values(props.items).filter(item => item === true).length
    }</span> </p>

  )
}



export default CountChoosPoorpepole
