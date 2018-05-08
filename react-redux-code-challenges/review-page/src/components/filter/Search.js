import React, { Component } from 'react';
import Input from '../form-elements/Input';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/actions/reviewsActions'

class Search extends Component {

  handleChange(e) {
    const value = e.target.value.substr(0,15)
    this.props.setSeacrhKeywords(value)
  }

  render() {
    const { searchKeyWords } = this.props
    return (
        <div>
            <Input
                cssClassName="searchBar"
                placeholder="Search"
                value={searchKeyWords}
                handleChange={this.handleChange.bind(this)}
            />
        </div>
    );
  }
};

const mapStateToProps = (state) => {
   return  {
     searchKeyWords: state.reviews.searchKeyWords
   }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
