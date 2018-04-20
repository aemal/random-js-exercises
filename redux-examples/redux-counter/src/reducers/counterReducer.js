import * as counterActionTypes from '../constants/counterConsts';
const initialState = {
    counterValue: 0
}

const counterReducer = (counter = initialState, action) => {
    switch(action.type) {
        case counterActionTypes.INC: {
            console.log("Incrementing...", counter, action);
            return ({counterValue: counter.counterValue + action.value});
        }

        case counterActionTypes.DEC: {
            console.log("Decrementing...", counter, action);
            return ({counterValue: counter.counterValue - action.value});
        }

        default: {
            console.log("No action type matched in counterReducer.js");
            return ({ counterValue: counter.counterValue });
        }

    }
}

export default counterReducer;