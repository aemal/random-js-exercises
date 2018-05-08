import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

//Component
import {Review} from './Review'
import _ from 'lodash';
import './style.css';

export const Reviews = ({reviews, loadMore, hasMore, searchKeyWords, searchStarsCount}) => {
  const KeyWordFilteredArray = searchKeyWords !== ''
    ? reviews.filter(review => {
        return review.title.indexOf(searchKeyWords) !== -1
      }).map(review => {
                return review
              })
    : reviews
const StarsFilteredArray = searchStarsCount !== null
    ? KeyWordFilteredArray.filter(review => {
                return review.stars === searchStarsCount
              }).map(review => {
                return review
              })
    : KeyWordFilteredArray

  const mappedReview = StarsFilteredArray.length === 0
                        ? <h1>{`No review matches your search`}</h1>
                        : <InfiniteScroll
                          dataLength={StarsFilteredArray.length}
                          next={loadMore}
                          hasMore={hasMore}
                          loader={<h4>Loading...</h4>}
                        >
                        {_.map(StarsFilteredArray, ((r, index) => {
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
