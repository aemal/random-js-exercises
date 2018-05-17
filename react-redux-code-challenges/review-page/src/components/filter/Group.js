import React from 'react';
import PropTypes from 'prop-types'
import DropdownElement from '../form-elements/Dropdown';

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/actions/filtersActions'

const Group = ({ setGroupBy, DefaultText }) => {
  let onChange = (e, { value }) => {
    let text = e.target.innerText
    let groupBy = {
      value,
      text
    }
    setGroupBy(groupBy)
  }
    const options = [
        {value: 'DD.MM.YYYY', text: 'Group by Day'},
        {value: 'DD.MMM', text: 'Group by Week'},
        {value: 'MMMM-YYYY', text: 'Group by Month'}
    ];
    return (
        <DropdownElement
            options={options}
            text={DefaultText}
            icon='calendar outline'
            onOptionChanged={onChange}
        />
    );
};

Group.propTypes = {
  setGroupBy: PropTypes.func.isRequired,
  DefaultText: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
   return  {
     DefaultText: state.filters.groupBy.text,
   }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Group)
