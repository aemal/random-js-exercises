import React from 'react';
import PropTypes from 'prop-types'
import DropdownElement from '../form-elements/Dropdown';

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/actions/filtersActions'


const Sort = ({ setSortBy, DefaultText }) => {
  let onChange = (e, {value}) => {
    let text = e.target.innerText
    let sortBy = {
      value,
      text
    }
    setSortBy(sortBy)
  }
    const options = [
        {value: 'DESCENDING', text: 'Sorted By Descending' },
        {value: 'ASCENDING', text: 'Sorted By Ascending' }
    ];
    return (
        <DropdownElement
            options={options}
            onOptionChanged={onChange}
            icon='sort'
            text={DefaultText}
        />
    );
};

Sort.propTypes = {
  setSortBy: PropTypes.func.isRequired,
  DefaultText: PropTypes.string.isRequired
}
const mapStateToProps = (state) => {
   return  {
     DefaultText: state.filters.sortBy.text,
   }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
