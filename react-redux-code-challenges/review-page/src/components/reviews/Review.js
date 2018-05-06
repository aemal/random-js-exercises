import React, { Component, Fragment } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Moment from 'react-moment';
import Avatar from '../avatar';
import { SettingsContext } from '../../context/settings';

export class Review extends Component {

render() {
  const { index, review } = this.props;
  return (
      <div className="review-card grid-container">
          <div className="review-detail">
            <div className="review-title">{review.title}</div>
            <div className="review-content">{review.content}</div>
          </div>
          <Avatar 
              cssClassName="avatar"
              src={review.productImg} 
              alt="avatar" 
              width="50px"
          />

          <div className="stars">
            <StarRatingComponent
              name="rating"
              editing={false}
              starCount={5}
              value={review.stars}
            />
          </div>
          <div className="date">
            <p>Date:
              <SettingsContext.Consumer>
                {settings => (
                  <Moment format={settings.dateFormat}>{review.reviewCreated}</Moment>
                )}
              </SettingsContext.Consumer> 
            </p>
          </div>
      </div>

  )
}
}

