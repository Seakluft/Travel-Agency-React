import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './place-card.css'

const PlaceCard = (props) => {
  return (
    <div className={`place-card-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image}
        className="place-card-image"
      />
      <div className="place-card-container1">
        <span className="place-card-text">{props.city}</span>
        <span className="place-card-text1">{props.description}</span>
        <OutlineButton button1="Accéder à la rubrique"></OutlineButton>
      </div>
    </div>
  )
}

PlaceCard.defaultProps = {
  image: 'b2242a57-6086-42a9-8ce6-5ee571e3c05b',
  image_alt: 'image',
  city: 'City Name',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

PlaceCard.propTypes = {
  image: PropTypes.string,
  image_alt: PropTypes.string,
  city: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default PlaceCard
