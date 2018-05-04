import React, { Component, Fragment } from 'react'

//Redux
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../redux/actions/reviewsActions'

class Reviews extends Component {
  componentDidMount(){
    this.props.fetchReviews(2)
  }
  render() {
    return (
      <Fragment>
      <h2>Hi from reviews</h2>
      <p>Open the console log to see the actions happening in the app</p>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
   return  state.reviews
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
