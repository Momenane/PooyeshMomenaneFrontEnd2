import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const PrimaryButton = (props) => {
return <button className="btn btn-primary" onClick={props.onClick} disabled={props.disabled}>{props.name}</button>;
};


PrimaryButton.propTypes = {
  onClick:PropTypes.func.isRequired
};

export default PrimaryButton;
