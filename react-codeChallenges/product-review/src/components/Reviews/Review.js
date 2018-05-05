import React, { Component, Fragment } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Moment from 'react-moment';
import Avatar from '../Avatar';
import { SettingsContext } from '../../context/settings';

export class Review extends Component {

render() {
  const { index, review } = this.props;
  return (
  
      <Fragment>
          <h4>{index}. {review.title}</h4>
          <Avatar 
              src={review.productImg} 
              alt="avatar" 
              width="100px"
          />

          <StarRatingComponent
              name="rating"
              editing={false}
              starCount={5}
              value={review.stars}
            />
          <p>Date:
          
          <SettingsContext.Consumer>
            {settings => (
              <Moment format={settings.dateFormat}>{review.reviewCreated}</Moment>
            )}
          </SettingsContext.Consumer> 
         
          </p>
          <p>{review.content}</p>
      </Fragment>

  )
}
}

