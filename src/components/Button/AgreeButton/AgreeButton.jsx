import React from "react";
import PropTypes from "prop-types";
import "./index.css";
const AgreeButton = (props) => {
  return <button className="btn btn-agree" onClick={props.onClick}> {props.name} </button>;
};

AgreeButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired
}

export default AgreeButton;
