import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// Components
import {Reviews} from '../components/Reviews/Reviews'

//Redux
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../redux/actions/reviewsActions'

class App extends Component {
  componentDidMount(){
    this.props.fetchReviews(1)
  }
  render(){
    const { fetched,
          reviews,
          error } = this.props

    const JSX   = fetched === true
                    ? <Fragment>
                        <Reviews reviews={reviews} />
                      </Fragment>
                    : <h1 style={{textAlign: 'center'}}>Loading....</h1>

  const ValidatedJSX = error === ''
                        ?  (JSX)
                        : <h3>Stop .. open the console. You have nice error :)</h3>
    return (
          (ValidatedJSX)
        )
      }
    }
App.propTypes = {
  error: PropTypes.string,
  fetchReviews: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  reviews: PropTypes.array.isRequired
}


const mapStateToProps = (state) => {
   return  state.reviews
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
