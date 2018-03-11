import * as R from 'ramda';

const MSGS = {
  BILL_AMOUNT_INPUT: 'BILL_AMOUNT_INPUT',
  TIP_PERCENT_INPUT: 'TIP_PERCENT_INPUT',
}

export function billAmountInputMsg(billAmount) {
  return {
    type: MSGS.BILL_AMOUNT_INPUT,
    billAmount,
  };
}

export function tipPercentInputMsg(tipPercent) {
  return {
    type: MSGS.TIP_PERCENT_INPUT,
    tipPercent,
  };
}

function update(msg, model) {
  switch(msg.type) {
    case MSGS.BILL_AMOUNT_INPUT: {
      const billAmount = msg.billAmount;
      return ({ ...model, billAmount });
    }

    case MSGS.TIP_PERCENT_INPUT: {
      const tipPercent = msg.tipPercent;
      return ({ ...model, tipPercent });
    }

    default:
      return model;
  }

  return model;
}

export default update;
