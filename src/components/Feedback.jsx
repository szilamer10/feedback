import React from "react";
import PropTypes from 'prop-types'
import  FeedbackData  from "./FeedbackData";
import FeedbackList from "./FeedbackList";

function Feedback() {
  if(!FeedbackData || FeedbackData.length === 0) {
    return <p>No Feedback yet</p>
  }
  return (
    <div>
      {FeedbackData.map((feedback, index) => (
        <FeedbackList feedback = {feedback}/>
      ))}
    </div>
  );
}
Feedback.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      rating:PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  )
}

export default Feedback;
