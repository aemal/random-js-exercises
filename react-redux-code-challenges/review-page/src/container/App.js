import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Sticky, Grid, Segment, Rail, Button } from 'semantic-ui-react'

// Components
import { Reviews } from '../components/reviews'
import { generalErrorMessage } from '../const/errorMessages';
import { SettingsContext, settings } from '../context/settings';
import Filter from '../components/filter';

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ReviewActions from '../redux/actions/reviewsActions'
import * as FilterActions from '../redux/actions/filtersActions'

class App extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props)
    
    conosle.log("AAA");
  }

  componentWillMount() {

  }
=======
  state = { }

    handleContextRef = contextRef => this.setState({ contextRef })
>>>>>>> cf7d9cdd959fd9f3e33988d77038c21ce29acefc

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
          searchStarsCount,
          sortBy,
          Grouping,
          groupBy } = this.props.filters
          const { contextRef } = this.state
    //Replace with CSS loading spinner
    const LoadingJSX = <h1 style={{textAlign: 'center'}}>Loading....</h1>;

    const ReviewsJSX = fetched === true
      ? <Reviews
          loadMore={this.loadMore}
          hasMore={hasMore}
          reviews={reviews}
          sortBy={sortBy.value}
          Grouping={Grouping}
          groupBy={groupBy.value}
          searchKeyWords={searchKeyWords}
          searchStarsCount={searchStarsCount} />
      : LoadingJSX;

<<<<<<< HEAD

      const ValidatedReviewsJSX = error === ''
=======
    const ValidatedReviewsJSX = error === ''
>>>>>>> cf7d9cdd959fd9f3e33988d77038c21ce29acefc
      ? ReviewsJSX
      : <h3>{generalErrorMessage}</h3>
      return (
        <Grid columns={2}>
       <Grid.Column>
       <SettingsContext.Provider value={settings}>
         <div ref={this.handleContextRef}>
           <Segment>
           {ValidatedReviewsJSX}
             <Rail position='right'>
               <Sticky active={true} context={contextRef}>
               <Segment>
               <Filter />
               <Button basic
                       color='red'
                       content='Refresh'
                       onClick={() => this.props.refreshFilter()} />
               </Segment>
               </Sticky>
             </Rail>
           </Segment>
         </div>
         </SettingsContext.Provider>
       </Grid.Column>
     </Grid>
        );
      }
    }

/*
Note: It is a good practice to validate the REST API columns on
proptypes, so that if a column name is missing from the REST API
it can be caught here ¯\_(ツ)_/¯
*/

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
    searchStarsCount: PropTypes.number.isRequired,
    sortBy: PropTypes.shape({
      value: PropTypes.string.isRequired,
      text:PropTypes.string.isRequired
    }).isRequired,
    groupBy: PropTypes.shape({
      value: PropTypes.string.isRequired,
      text:PropTypes.string.isRequired
    }).isRequired,
    Grouping: PropTypes.bool.isRequired
  }).isRequired,
  refreshFilter: PropTypes.func.isRequired,
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
  return bindActionCreators({...ReviewActions, ...FilterActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
