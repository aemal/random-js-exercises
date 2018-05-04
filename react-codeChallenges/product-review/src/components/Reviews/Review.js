import React, {Fragment} from 'react'

// Libs
import StarRatingComponent from 'react-star-rating-component';
import Moment from 'react-moment';

export const Review = ({review}) => {
  return (
    <Fragment>
        <h4>Title: {review.title}</h4>
        <StarRatingComponent
          name="rating"
          editing={false}
          starCount={5}
          value={review.stars}
        />
        <p>Date: 
        <Moment format="MM/DD/YYYY">{review.reviewCreated}</Moment>
        </p>
    </Fragment>
  )
}
