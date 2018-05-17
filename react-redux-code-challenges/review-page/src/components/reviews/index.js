import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import _ from 'lodash';
import './style.css';
import moment from  'moment'
//Component
import {Review} from './Review'


export const Reviews = ({ reviews,
  loadMore,
  hasMore,
  searchKeyWords,
  searchStarsCount,
  sortBy,
  groupBy,
  Grouping }) => {
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

  const SortByAscArray = sortBy !== "" && sortBy === "ASCENDING"
    ? StarsFilteredArray
    : StarsFilteredArray.sort((a, b) => {
        return b.reviewCreated - a.reviewCreated;
      })

  const SortedArray = sortBy !== "" && sortBy === "DESCENDING"
    ? SortByAscArray
    : SortByAscArray.sort((a, b) => {
        return a.reviewCreated - b.reviewCreated;
      })


  const mappedReview = () => {
    if(SortedArray.length === 0) {
      return (<h1>{`No review matches your search`}</h1>);
    }

    // Global decalartions
    let last;
    let weekFirstDay = "Sunday"


    const GroupedByMonth = (date) => {
      let GroupedByMonthJSX = last !== moment(date).format(groupBy) && <div>{moment(date).format(groupBy)}</div>
      last = moment(date).format(groupBy);
      return GroupedByMonthJSX
    }

    const GroupedByWeek = (date) => {
      let weekNo = moment(date).isoWeek();
      let weekStartDate = moment().day(weekFirstDay).week(weekNo).format(groupBy);
      let weekEndDate = moment(weekStartDate).add(6, 'days').format(groupBy);
      let GroupedByWeekJSX = last !== weekEndDate && <div>{`${weekStartDate} - ${weekEndDate}`}</div>
      last = weekEndDate;
      return GroupedByWeekJSX
    }

    const GroupedByDay = (date) => {
      let GroupedByDayJSX = last !== moment(date).format(groupBy) && <div>{moment(date).format(groupBy)}</div>
      last = moment(date).format(groupBy);
      return GroupedByDayJSX
    }

    const GroupedByJSX = (review) => {
      let res = Grouping && groupBy === 'MMMM-YYYY'
                      ? GroupedByMonth(review.reviewCreated)
                      : groupBy === 'DD.MMM'
                      ? GroupedByWeek(review.reviewCreated)
                      : groupBy === 'DD.MM.YYYY'
                      ? GroupedByDay(review.reviewCreated)
                      : null
      return res
    }


    return (
      <InfiniteScroll
            dataLength={SortedArray.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >

          {_.map(SortedArray, ((r, index) => {

            return (
                <Fragment key={r.reviewId}>
                <div>{GroupedByJSX(r)}</div>
                  <Review
                      review={r} />
                </Fragment>
              );
          })
        )}
      </InfiniteScroll>
    );
  }

  return(
    <div className="reviews">
      {mappedReview()}
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
  searchStarsCount: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
  groupBy: PropTypes.string.isRequired,
  Grouping: PropTypes.bool.isRequired
}
