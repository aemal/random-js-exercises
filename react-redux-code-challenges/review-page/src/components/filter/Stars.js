import React, { Component, Fragment } from 'react';
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/actions/reviewsActions'


class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxes: [1,2,3,4,5],
    };
  }

  onChangedCheckBox = (val) => {

  this.props.setSearchedStarsCount(val)
  this.props.searchByStars(val)
  }

  render() {
    const { checkedBox } = this.props
    const { checkBoxes } = this.state

    const JSX = checkBoxes.map(val => {
      return (
              <Fragment key={val}>
                <input
                  type="checkbox"
                  value={val}
                  checked={checkedBox >= val ? true : false}
                  onChange={this.onChangedCheckBox.bind(null, val)} />
                  <StarRatingComponent
                                  name={`RatingStar${val}`}
                                  starCount={1}
                                  editing={false}
                                  value={checkedBox >= val ? 1 : 0} />
            </Fragment>
        )
    })
    return (
          (JSX)
    );
  }
}



const mapStateToProps = (state) => {
   return  {
     checkedBox: state.reviews.searchStarsCount,
     searchKeyWords: state.reviews.searchKeyWords
   }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Stars)
