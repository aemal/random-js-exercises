import * as R from 'ramda';

const MSGS = {
  LEFT_VALUE_INPUT: 'LEFT_VALUE_INPUT',
  RIGHT_VALUE_INPUT: 'RIGHT_VALUE_INPUT',
  LEFT_UNIT_CHANGED: 'LEFT_UNIT_CHANGED',
  RIGHT_UNIT_CHANGED: 'RIGHT_UNIT_CHANGED',
  CALC_CONVERSION: 'CALC_CONVERSION',
}

export function leftValueInputMsg(leftValue) {
  return {
    type: MSGS.LEFT_VALUE_INPUT,
    leftValue
  };
}

export function rightValueInputMsg(rightValue) {
  return {
    type: MSGS.RIGHT_VALUE_INPUT,
    rightValue
  };
}

export function leftUnitChangedMsg(leftUnit) {
  return {
    type: MSGS.LEFT_UNIT_CHANGED,
    leftUnit
  };
}

export function rightUnitChangedMsg(rightUnit) {
  return {
    type: MSGS.RIGHT_UNIT_CHANGED,
    rightUnit
  };
}

export const calcConversionMsg = { type: MSGS.CALC_CONVERSION };

const toInt = R.pipe(parseInt, R.defaultTo(0));

function round(number) {
  return Math.round(number * 10) / 10;
}

function convert(model) {
  const { leftValue, leftUnit, rightValue, rightUnit } = model;

  const [fromUnit, fromTemp, toUnit] = 
    model.sourceLeft
    ? [leftUnit, leftValue, rightUnit]
    : [rightUnit, rightValue, leftUnit];

  const otherValue = R.pipe(
    convertFromToTemp,
    round,
  )(fromUnit, toUnit, fromTemp);

  return model.sourceLeft
    ? { ...model, rightValue: otherValue }
    : { ...model, leftValue: otherValue };
}

function convertFromToTemp(fromUnit, toUnit, temp) {
  const convertFn = R.pathOr( //R.pathOr is used to execute the functions given in the UnitConversions object i.e. UnitConversions.<fromUnit>.<toUnit> structure will be followed, lets say if it was Celsius to Fahrenheit, it will return UnitConversions.Celsius.Fahrenheit by using the UnitConversions object and get the fucntion CtoF()
    R.identity, //R.identity is a function that takes a param and return it back, this part will be used if there was no key found in the UnitConversions object, it is a dummy function that is used to ignore cases of conversion of the same temp unit i.e. Celius to Celius or .
    [fromUnit, toUnit],
    UnitConversions);

  return convertFn(temp);
}

function FtoC(temp) {
  return 5 / 9 * (temp - 32);
}

function CtoF(temp) {
  return 9 / 5 * temp + 32;
}

function KtoC(temp) {
  return temp - 273.15;
}

function CtoK(temp) {
  return temp + 273.15;
}

const FtoK = R.pipe(FtoC, CtoK);
const KtoF = R.pipe(KtoC, CtoF);

const UnitConversions = {
  Celsius: {
    Fahrenheit: CtoF,
    Kelvin: CtoK,
  },
  Fahrenheit: {
    Celsius: FtoC,
    Kelvin: FtoK,
  },
  Kelvin: {
    Celsius: KtoC,
    Fahrenheit: KtoF,
  },
};

function update (msg, model) {
  switch(msg.type) {
    case MSGS.LEFT_VALUE_INPUT: {
      if (msg.leftValue === '')
        return { ...model, sourceLeft: true, leftValue: '', rightValue: '' }
      const leftValue = toInt(msg.leftValue);
      return convert({ ...model, sourceLeft: true, leftValue });
    }

    case MSGS.RIGHT_VALUE_INPUT: {
      if (msg.rightValue === '')
        return { ...model, sourceLeft: true, leftValue: '', rightValue: '' }
      const rightValue = toInt(msg.rightValue);
      return convert({ ...model, sourceLeft: false, rightValue });
    }

    case MSGS.LEFT_UNIT_CHANGED: {
      const { leftUnit } = msg;
      return convert({ ...model, leftUnit });
    }

    case MSGS.RIGHT_UNIT_CHANGED: {
      const { rightUnit } = msg;
      return convert({ ...model, rightUnit });
    }

    case MSGS.CALC_CONVERSION: {
      if(model.sourceLeft) {
        console.log(9/5*model.leftValue+32)
      } else {
        console.log("TBD");
      }
    }

  }
  return model;
}

export default update;
