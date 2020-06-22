import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
const ContactUsButton = props => {
  return (
    <button className="btn btn-contact">
      {props.name}
    </button>
  )
}

ContactUsButton.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ContactUsButton
