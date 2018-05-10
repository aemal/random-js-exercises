import React from 'react';
import PropTypes from 'prop-types'
import Dropdown from '../form-elements/Dropdown';

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/actions/filtersActions'

const Group = ({ setGroupBy }) => {
  let onChange = (e) => {
    const groupBy = e.target.value
    setGroupBy(groupBy)
  }
    const options = [
        {value: 'DAY', label: 'Group by Day'},
        {value: 'WEEK', label: 'Group by Week'},
        {value: 'MONTH', label: 'Group by Month'}
    ];

    const defaultOption = {value: '', label: 'Group by'}
    return (
        <Dropdown
            options={options}
            onOptionChanged={onChange}
            defaultOption={defaultOption}
        />
    );
};

Group.propTypes = {
  setGroupBy: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(null, mapDispatchToProps)(Group)
