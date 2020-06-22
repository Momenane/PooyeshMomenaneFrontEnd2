import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./LinkButton.css";

const LinkButton = (props) => {
  return (
    <Link to={props.to} className="btn btn-link">
      {props.name}
      {props.icon ? <props.icon className="LinkBtn-icon" />:null}
    </Link>
  );
};

LinkButton.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon:PropTypes.func,
};
LinkButton.defaultProps = {
  to: "/",
};
export default LinkButton;
