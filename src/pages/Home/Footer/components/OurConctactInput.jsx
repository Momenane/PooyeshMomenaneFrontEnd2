import React from "react";
import PropTypes from 'prop-types'
import "./OurConctactInput.css";

const OurConctactInput = (props) => {
  console.log(props)
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      className="footerInput ourContactInput"
      placeholder={props.placeholder}
      name={props.name}
    />
  );
};

OurConctactInput.propTypes = {
  placeholder:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  name:PropTypes.string.isRequired
}
export default OurConctactInput;
