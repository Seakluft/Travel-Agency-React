import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <span className="component-text">{props.text}</span>
      <span className="component-text1">{props.text1}</span>
      <OutlineButton button1="Accéder à la rubrique"></OutlineButton>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'Barcelona',
  text1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default AppComponent
