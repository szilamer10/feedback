import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>{children}</div> // class adas object literalsal
//   )
return (
         <div className='card' style = {{
            backgroundColor:reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : 'black'}}>{children}</div> // class adas object literalsal
       )
}

Card.defaultProps = {
    reverse:true,
}

Card.defaultTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card