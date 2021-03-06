import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import {
  leftValueInputMsg,
  rightValueInputMsg,
  leftUnitChangedMsg,
  rightUnitChangedMsg,
  calcConversionMsg,
} from './Update'
const {
  div,
  h1,
  pre,
  label, 
  input,
  td, 
  th, 
  tr, 
  tbody, 
  thead, 
  table,
  select,
  option
} = hh(h);

const UNITS = ['Fahrenheit', 'Celsius', 'Kelvin'];

function unitOptions(selectedUnit) {
  return R.map(
    unit => option({ value: unit, selected: selectedUnit === unit }, unit),
    UNITS
  );
}

function unitSection(dispatch, unit, value, inputMsg, unitMsg) {
  return div({ className: 'w-50 ma1' }, [
      input({
        type: 'text',
        className: 'db w-100 mv2 pa2 input-reset ba',
        value,
        oninput: e => {
          dispatch(inputMsg(e.target.value));
          dispatch(calcConversionMsg);
        },
      }),
      select(
        {
          className: 'db w-100 pa2 ba input-reset br1 bg-white ba b--black',
          onchange: e => { 
            dispatch(unitMsg(e.target.value));
            dispatch(calcConversionMsg);
          }
        },
        unitOptions(unit),
      ),
    ]
  );
}




function view(dispatch, model) {
  return div({ className: 'mw6 center' }, [
    h1({ className: 'f2 pv2 bb' }, 'Temperature Unit Converter'),
    div({ className: 'flex' }, [
      unitSection(
        dispatch,
        model.leftUnit,
        model.leftValue,
        leftValueInputMsg,
        leftUnitChangedMsg,
      ),
      unitSection(
        dispatch,
        model.rightUnit,
        model.rightValue,
        rightValueInputMsg,
        rightUnitChangedMsg,
      ),
    ]),
    pre(JSON.stringify(model, null, 2)),
  ]);
}

export default view;

/*
Planning the view:

appDiv
  titleDiv
  inputBox
  select
    selectOption

*/