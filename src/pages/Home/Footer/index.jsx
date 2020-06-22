import React from "react";
import FooterTitle from "./components/FooterTitle";
import ContactInfoItem from "./components/ContactInfoItem";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import OurConctactInput from "./components/OurConctactInput";
import ContactUsButton from "../../../components/Button/ContactUsButton/ContactUsButton";
import OurContactTextAreaInput from "./components/OurContactTextAreaInput";

import { footer } from "../../../data.json";
import "./index.css";

export default (props) => {
  console.log(props);
  return (
    <footer className="container footerMarginTop">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <FooterTitle name={footer.contactInfo} />
          <ContactInfoItem
            name={footer.phoneProperty}
            paragraph={footer.phoneValue}
            letterSpacing={10}
            paddingRight={10}
            icon={FaPhone}
          />
          <ContactInfoItem
            name={footer.addressProperty}
            paragraph={footer.addressValue}
            letterSpacing={1}
            paddingRight={3}
            icon={FaMapMarkerAlt}
          />
          <ContactInfoItem
            name={footer.emailProperty}
            paragraph={footer.emailValue}
            letterSpacing={1}
            paddingRight={3}
            icon={FaEnvelope}
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <FooterTitle name={footer.aboutUs} />
          <p className="footer-aboutUsParagraph">{footer.aboutUsParagraph}</p>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <form className="footer-form" onSubmit={props.onSubmitForm}>
            <FooterTitle name={footer.contactUs} />
            <OurConctactInput
              placeholder={footer.formPlaceHolderName}
              onChange={props.onChange}
              value={props.valueName}
              name={props.fName}
            />

            <OurConctactInput
              placeholder={footer.formPlaceHolderEmail}
              onChange={props.onChange}
              value={props.valueEmail}
              name={props.emailName}
            />
            <OurContactTextAreaInput
              placeholder={footer.formPlaceHolderDescription}
              onChange={props.onChange}
              value={props.valueDesc}
              name={props.descName}
            />
            <ContactUsButton name={footer.formbuttonSend} />
          </form>
        </div>
      </div>
    </footer>
  );
};
