import React from 'react'
import PropTypes from 'prop-types'
import StarRatingComponent from 'react-star-rating-component';
import Moment from 'react-moment';
import Avatar from '../avatar';
import { SettingsContext } from '../../context/settings';

export const Review = ({ review, index }) => {
  return (
      <div className="grid-container">
          <div className="review-detail">
            <div className="review-title">{index}.{review.title}</div>
            <div className="review-content">{review.content}</div>
          </div>
          <Avatar
              cssClassName="avatar"
              src={review.productImg}
              alt="avatar"
              width="50px"
          />

          <div className="stars">
            <div className="secondary-text">STARS</div>
            <StarRatingComponent
              name="rating"
              editing={false}
              starCount={5}
              value={review.stars}
            />
          </div>
          <div className="date">
              <div className="secondary-text">DATE</div>
              <SettingsContext.Consumer>
                {settings => (
                  <Moment format={settings.dateFormat}>{review.reviewCreated}</Moment>
                )}
              </SettingsContext.Consumer>
          </div>
          <div className="product-name">
                {`${review.productTitle.substr(0, 12)}...`}
          </div>
      </div>

  )
 }

Review.propTypes = {
  index: PropTypes.number.isRequired,
  review: PropTypes.shape({
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
  }).isRequired
}
