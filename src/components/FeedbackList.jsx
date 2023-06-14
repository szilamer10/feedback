import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

function FeedbackList({feedback}) {
  return (
    <Card key = {feedback.id} >
          <div className="cardRating">{feedback.rating}</div>
          <button className="">
            <FaTimes />
          </button>
          <div className="cardDescription">{feedback.description}</div>
    </Card>
  )
}
FeedbackList.propTypes = {
feedback:PropTypes.object.isRequired,
}

export default FeedbackList