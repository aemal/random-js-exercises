import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

//Component
import {Review} from './Review'
import _ from 'lodash';
import './style.css';

export const Reviews = ({reviews, loadMore, hasMore}) => {

  const mappedReview = reviews.length === 0
                        ? <h1>{`No review matches your search`}</h1>
                        : <InfiniteScroll
                          dataLength={reviews.length}
                          next={loadMore}
                          hasMore={hasMore}
                          loader={<h4>Loading...</h4>}
                        >
                        {_.map(reviews, ((r, index) => {
                          return <Review key={r.reviewId} index={index+1} review={r} />
                        })
                      )}
                        </InfiniteScroll>
  return(
    <div className="reviews">
      {mappedReview}
    </div>
  )
}


Reviews.propTypes = {
  reviews: PropTypes.array.isRequired
}
