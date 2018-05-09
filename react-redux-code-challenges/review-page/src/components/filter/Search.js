import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Input from '../form-elements/Input';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/actions/filtersActions'

class Search extends Component {

  handleChange(e) {
    const value = e.target.value.substr(0,15)
    this.props.setSeacrhedKeywords(value)
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

Search.propTypes = {
  searchKeyWords: PropTypes.string.isRequired,
  setSeacrhedKeywords: PropTypes.func.isRequired,
  setSearchedStarsCount: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
   return  {
     searchKeyWords: state.filters.searchKeyWords
   }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
