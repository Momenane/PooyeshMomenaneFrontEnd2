import React from "react";
import PropTypes from "prop-types";
import "./ContactInfoItem.css";

const ContactInfoItem = (props) => {
  return (
    <div className="contactInfoContainer">
       <div className="col-footerIcon">
        <div className="footer-iconContainer">
          <props.icon className="footer-icon" />
        </div>
      </div>
      <div className="col-footerSpan">
        <span style={{fontFamily:'IRANSans'}}>{props.name}</span>
        <span 
          style={{
            paddingRight: props.paddingRight,
            letterSpacing: props.letterSpacing ,
            fontFamily:'IRANSans'
          }}
        >
          {props.paragraph}
        </span>
      </div>
     
    </div>
  );
};

ContactInfoItem.propTypes = {};

export default ContactInfoItem;
