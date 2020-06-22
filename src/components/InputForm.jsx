import React from 'react'
import PropTypes from "prop-types";
import './InputForm.css'

const InputForm=(props) => {

  return(
      <input 
       type={props.type}
       className="InputForm"
       value={props.value} 
       onChange={props.onChange}
       name={props.name}
       placeholder={props.placeholder}
       />
   )
}


InputForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type:PropTypes.string
};

InputForm.defaultProps = {
  type:'text'
};

export default InputForm;
