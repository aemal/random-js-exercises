import React, { Component, Fragment } from 'react';
import StarRatingComponent from 'react-star-rating-component'
import { Checkbox } from 'semantic-ui-react'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/actions/filtersActions'


class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxes: [1,2,3,4,5],
    };
  }

  onChangedCheckBox = (val) => {
    const value = this.props.checkedBox === val
                  ? 0
                  : val
  this.props.setSearchedStarsCount(value)
  }

  render() {
    const { checkedBox } = this.props
    const { checkBoxes } = this.state
    const JSX = checkBoxes.map(val => {
      return (
              <Fragment key={val}>
                <Checkbox
                  type="checkbox"
                  value={val}
                  checked={checkedBox >= val ? true : false}
                  onChange={this.onChangedCheckBox.bind(null, val)} />
                  {val}
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

Stars.propTypes = {
  checkedBox: PropTypes.number.isRequired,
  setSeacrhedKeywords: PropTypes.func.isRequired,
  setSearchedStarsCount: PropTypes.func.isRequired,
  setSortBy: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
   return  {
     checkedBox: state.filters.searchStarsCount,
   }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Stars)
