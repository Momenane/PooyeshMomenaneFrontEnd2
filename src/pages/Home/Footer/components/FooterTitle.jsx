import React from 'react'
import PropTypes from 'prop-types'
import './FooterTitle.css'
const FooterTitle = props => {
  return (
    <h3 className="footer-title">
      {props.name}
    </h3>
  )
}

FooterTitle.propTypes = {
  name:PropTypes.string.isRequired
}

export default FooterTitle
