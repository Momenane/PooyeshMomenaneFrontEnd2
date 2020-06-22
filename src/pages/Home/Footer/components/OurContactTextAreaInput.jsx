import React from "react";
import PropTypes from 'prop-types'
import "./OurContactTextAreaInput.css";

const OurContactTextAreaInput = (props) => {
  return (
  <textarea 
   type="text"
   value={props.value}
   onChange={props.onChange}
   placeholder={props.placeholder}
   className="footerInput footer-ourContactTextArea"
   cols="30" 
   rows="4"
   name={props.name}
   
   />
  );
};

OurContactTextAreaInput.propTypes = {
  placeholder:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  name:PropTypes.string.isRequired
}
export default OurContactTextAreaInput;
