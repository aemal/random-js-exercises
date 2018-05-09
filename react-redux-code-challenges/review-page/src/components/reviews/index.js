import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import _ from 'lodash';
import './style.css';

//Component
import {Review} from './Review'

export const Reviews = ({ reviews,
  loadMore,
  hasMore,
  searchKeyWords,
  searchStarsCount,
  sortBy }) => {
  const KeyWordFilteredArray = searchKeyWords !== ''
    ? reviews.filter(review => {
        return (
          review.title.toLowerCase().indexOf(searchKeyWords.toLowerCase()) !== -1
        )
      })
    : reviews
const StarsFilteredArray = searchStarsCount !== 0
    ? KeyWordFilteredArray.filter(review => {
                return review.stars === searchStarsCount
              })
    : KeyWordFilteredArray
const SortByAscArray = sortBy === "ASCENDING"
    ? StarsFilteredArray
    : StarsFilteredArray.sort((a, b) => {
        return b.reviewCreated - a.reviewCreated;
      })
const SortedArray = sortBy === "DESCENDING"
    ? SortByAscArray
    : SortByAscArray.sort((a, b) => {
        return a.reviewCreated - b.reviewCreated;
      })
  const mappedReview = SortedArray.length === 0
                        ? <h1>{`No review matches your search`}</h1>
                        : <InfiniteScroll
                          dataLength={SortedArray.length}
                          next={loadMore}
                          hasMore={hasMore}
                          loader={<h4>Loading...</h4>}
                        >
                        {_.map(SortedArray, ((r, index) => {
                          return <Review
                                    key={r.reviewId}
                                    index={index+1}
                                    review={r} />
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
  reviews: PropTypes.arrayOf(PropTypes.shape({
    authorId: PropTypes.string.isRequired,
    childAsin: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    productImg: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    reviewCreated: PropTypes.number.isRequired,
    reviewId: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    verified: PropTypes.bool.isRequired,
    watched: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  searchKeyWords: PropTypes.string.isRequired,
  searchStarsCount: PropTypes.number.isRequired
}
