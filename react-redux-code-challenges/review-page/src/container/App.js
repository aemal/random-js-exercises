import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import { Reviews } from '../components/reviews'
import { generalErrorMessage } from '../const/errorMessages';
import { SettingsContext, settings } from '../context/settings';
import Filter from '../components/filter';

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../redux/actions/reviewsActions'

class App extends Component {
  componentDidMount(){
    this.props.fetchReviews(1)
  }

  loadMore = () => {
    let page = this.props.reviews.requestedPage + 1;
    this.props.fetchReviews(page);
  }

  render() {
    const { fetched,
          reviews,
          error,
          hasMore } = this.props.reviews

    const { searchKeyWords,
          searchStarsCount } = this.props.filters

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
      : <h3>{generalErrorMessage}</h3>


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
  reviews: PropTypes.shape({
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    requestedPage: PropTypes.number.isRequired,
      reviews: PropTypes.arrayOf(PropTypes.shape({
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
      }).isRequired).isRequired,
    hasMore: PropTypes.bool.isRequired,
  }).isRequired,
  filters: PropTypes.shape({
    searchKeyWords: PropTypes.string.isRequired,
    searchStarsCount: PropTypes.number.isRequired
  }).isRequired,
  requestReviews: PropTypes.func.isRequired,
  fetchReviews: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
   return  {
     reviews: state.reviews,
     filters: state.filters
   }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
