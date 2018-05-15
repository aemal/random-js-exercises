import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'
import StarRatingComponent from 'react-star-rating-component';
import Moment from 'react-moment';
import Avatar from '../avatar';
import { SettingsContext } from '../../context/settings';

export const Review = ({ review, index }) => {
  return (
    <Card fluid color='yellow'>
      <Card.Content>
        <Card.Header>
        <div className="review-title">{review.title}</div>
        </Card.Header>
        <Card.Meta>
        <SettingsContext.Consumer>
          {settings => (
            <Moment format={settings.dateFormat}>{review.reviewCreated}</Moment>
          )}
        </SettingsContext.Consumer>
        </Card.Meta>
        <Card.Description>
        <div className="review-content">{review.content}</div>
        </Card.Description>
      </Card.Content>
    </Card>
  )
 }

Review.propTypes = {
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
