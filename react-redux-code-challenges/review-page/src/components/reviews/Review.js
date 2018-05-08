import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Moment from 'react-moment';
import Avatar from '../avatar';
import { SettingsContext } from '../../context/settings';

export class Review extends Component {

render() {
  const { index, review } = this.props;
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
}
