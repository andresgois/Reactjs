import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <div>
      <button style={{ 
          width: `${props.width}px`,
          height: `${props.height}px`,
        }}>
        { props.children }
      </button>
    </div>
  )
}

Button.defaultProps = {
  height: 50,
}

Button.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
}

export default Button
