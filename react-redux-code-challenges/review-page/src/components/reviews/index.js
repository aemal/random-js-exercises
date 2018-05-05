import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

//Component
import {Review} from './Review'


export const Reviews = ({reviews}) => {
  const mappedReview = reviews.map((r, index) => {
    return <Review key={r.reviewId} index={index+1} review={r} />
  })
  return(
    <Fragment>
      {mappedReview}
    </Fragment>
  )
}


Reviews.propTypes = {
  reviews: PropTypes.array.isRequired
}
