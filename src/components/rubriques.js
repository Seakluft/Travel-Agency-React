import React from 'react'

import PropTypes from 'prop-types'

import './rubriques.css'

const Rubriques = (props) => {
  return (
    <div className="rubriques-container">
      <h1>{props.Rubriques}</h1>
    </div>
  )
}

Rubriques.defaultProps = {
  Rubriques: 'Heading',
}

Rubriques.propTypes = {
  Rubriques: PropTypes.string,
}

export default Rubriques
