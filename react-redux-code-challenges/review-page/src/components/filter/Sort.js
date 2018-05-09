import React from 'react';
import PropTypes from 'prop-types'
import Dropdown from '../form-elements/Dropdown';

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/actions/filtersActions'


const Sort = ({ setSortBy }) => {
  let onChange = (e) => {
    let sortBy = e.target.value
    setSortBy(sortBy)
  }
    const options = [
        { value: 'ASCENDING', label: 'Sort By Ascending' },
        { value: 'DESCENDING', label: 'Sort By Descending' }
    ];
    return (
        <Dropdown
            options={options}
            onOptionChanged={onChange}
        />
    );
};

Sort.propTypes = {
  setSortBy: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(null, mapDispatchToProps)(Sort)
