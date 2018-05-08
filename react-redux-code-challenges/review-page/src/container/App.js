import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import { Reviews } from '../components/reviews'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../redux/actions/reviewsActions'

import { generalErrorMessage } from '../const/errorMessages';


import { SettingsContext, settings } from '../context/settings';
import Filter from '../components/filter';

class App extends Component {

  componentDidMount(){
    this.props.fetchReviews(1)
  }

  loadMore = () => {
    let page = this.props.requestedPage + 1;
    this.props.fetchReviews(page);
  }

  render() {
    const { fetched,
          reviews,
          error,
          hasMore,
          searchKeyWords,
          searchStarsCount } = this.props

    //Replace with CSS loading spinner
    const LoadingJSX = <h1 style={{textAlign: 'center'}}>Loading....</h1>;

    const ReviewsJSX = fetched === true
      ? <Reviews
          loadMore={this.loadMore}
          hasMore={hasMore}
          reviews={reviews}
          searchKeyWords={searchKeyWords}
          searchStarsCount={searchStarsCount} />
      : LoadingJSX;


    const ValidatedJSX = error === ''
      ? ReviewsJSX
      : <h3>{generalErrorMessage}</h3>;


      return (
              <SettingsContext.Provider value={settings}>
                <div className="mainContainer">
                  <Filter />
                  {ValidatedJSX}
                </div>
              </SettingsContext.Provider>
        );
      }
    }
App.propTypes = {
  fetchReviews: PropTypes.func,
  fetched: PropTypes.bool,
  fetching: PropTypes.bool,
  hasMore: PropTypes.bool,
  reviews: PropTypes.array
}


const mapStateToProps = (state) => {
   return  state.reviews
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
