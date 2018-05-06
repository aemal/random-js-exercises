import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

//Component
import {Review} from './Review'
import _ from 'lodash';

export const Reviews = ({reviews}) => {
  
  const mappedReview = _.map(reviews, ((r, index) => {
    return <Review key={r.reviewId} index={index+1} review={r} />
  }));

  return(
    <div className="reviews">
      {mappedReview}
    </div>
  )
}


Reviews.propTypes = {
  reviews: PropTypes.array.isRequired
}
